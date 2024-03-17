import {
  useState,
  useEffect,
  useContext,
  createContext,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

interface Auth {
  user: null;
  token: string;
}

const AuthContext = createContext<
  [Auth, Dispatch<SetStateAction<Auth>>] | undefined
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
      setAuth(parsedData);
    }
  }, []);

  const updateAuth = (newAuth: SetStateAction<Auth>) => {
    setAuth((prevAuth) => {
      const updatedAuth =
        typeof newAuth === "function" ? newAuth(prevAuth) : newAuth;
      localStorage.setItem("auth", JSON.stringify(updatedAuth));
      return updatedAuth;
    });
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
