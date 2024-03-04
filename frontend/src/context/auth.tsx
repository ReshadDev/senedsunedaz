import {
  useState,
  useEffect,
  useContext,
  createContext,
  ReactNode,
  SetStateAction,
} from "react";

interface Auth {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  user: any | null;
  token: string;
  timestamp?: number; // Optional timestamp property for token expiration
}

const AuthContext = createContext<
  [Auth, React.Dispatch<React.SetStateAction<Auth>>] | undefined
>(undefined);

const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [auth, setAuth] = useState<Auth>({
    user: null,
    token: "",
  });

  useEffect(() => {
    const data = localStorage.getItem("auth");
    if (data) {
      const parsedData = JSON.parse(data);
      const currentTime = Date.now();

      // Check if the token is expired (2 hours in milliseconds)
      const isTokenExpired =
        currentTime - parsedData.timestamp > 2 * 60 * 60 * 1000;

      if (isTokenExpired) {
        // Token expired, clear auth
        setAuth({
          user: null,
          token: "",
        });
        localStorage.removeItem("auth");
      } else {
        // Token is still valid
        setAuth({
          ...auth,
          user: parsedData.user,
          token: parsedData.token,
        });
      }
    }
    // eslint-disable-next-line
  }, []);

  const updateAuth = (newAuth: SetStateAction<Auth>) => {
    setAuth((prevAuth) => {
      const updatedAuth =
        typeof newAuth === "function" ? newAuth(prevAuth) : newAuth;
      // Set timestamp for the new token
      updatedAuth.timestamp = Date.now();
      return updatedAuth;
    });
    localStorage.setItem("auth", JSON.stringify(auth));
  };
  return (
    <AuthContext.Provider value={[auth, updateAuth]}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export { AuthProvider, useAuth };
