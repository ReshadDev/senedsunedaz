import * as React from 'react';
import { useAuth } from '../../context/auth';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const AdminPanel: React.FC = () => {
  const navigate = useNavigate();
  const [auth, setAuth] = useAuth();

  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      tokenPair: { accessToken: '', refreshToken: '' },
    });
    localStorage.removeItem('auth');
    toast.success('Çıxış edildi');
    setTimeout(() => {
      navigate('/');
    }, 500);
  };
  return (
    <div>
      <h1>Admin Panel</h1>
      <p>Welcome to the admin panel</p>

      <div className='logout'>
        <button onClick={handleLogout}>Çıxış et</button>
      </div>
    </div>
  );
};

export default AdminPanel;
