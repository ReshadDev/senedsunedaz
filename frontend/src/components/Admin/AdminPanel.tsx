import axios from "axios";
import * as React from "react";
import { Category } from "../../interfaces";
import { APIURL } from "../../config";

const AdminPanel: React.FC = () => {
  const [categories, setCategories] = React.useState<Category[]>([]);

  const getAllCategories = async () => {
    try {
      const { data } = await axios.get(
        `${APIURL}/api/category/getAllCategories`
      );
      if (data?.success) {
        setCategories(data?.categories);
      }
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    getAllCategories();
  }, []);

  return (
    <div>
      <h1>Admin Panel</h1>
      <p>Welcome to the admin panel</p>

      <div className="all-categories">
        <h2>All Categories</h2>
        <ul>
          {categories.map((category) => (
            <li key={category.id}>{category.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AdminPanel;
