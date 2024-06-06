import * as React from 'react';
import { useAuth } from '../../context/auth';
import { refreshAccessToken } from '../../utils/services';

const AdminPanel: React.FC = () => {
  const [auth, updateAuth] = useAuth();

  const handleRefreshToken = async () => {
    const newAccessToken = await refreshAccessToken(auth.tokenPair.accessToken);

    updateAuth((prevAuth) => ({
      ...prevAuth,
      tokenPair: {
        ...prevAuth.tokenPair,
        accessToken: newAccessToken,
      },
    }));
  };
  return (
    <div>
      <h1>Admin Panel</h1>
      <p>Welcome to the admin panel</p>

      <div className="logout">
        <button className="admin-btns " onClick={handleRefreshToken}>
          Refresh
        </button>
      </div>
    </div>
  );
};

export default AdminPanel;
