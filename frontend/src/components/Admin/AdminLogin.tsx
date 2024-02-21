import React from "react";
import { Link } from "react-router-dom";

const AdminLogin: React.FC = () => {
  return (
    <div id="admin">
      <div className="login-container">
        <h2>Admin Login</h2>
        <form>
          <label>
            Username:
            <input type="text" name="username" />
          </label>
          <br />
          <label>
            Password:
            <input type="password" name="password" />
          </label>
          <br />
          {/* <button type="submit">Login</button> */}
          <Link to="/admin">Login</Link>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
