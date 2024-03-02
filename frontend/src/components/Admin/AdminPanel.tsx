import * as React from "react";

import axios from "axios";
import config from "../../config";

interface Category {
  id: string;
  name: string;
}

const AdminPanel: React.FC = () => {
  const apiURL = config.apiURL;
  const [categories, setCategories] = React.useState<Category[]>([]);

  const getAllCategories = async () => {
    try {
      const { data } = await axios.get(
        `${apiURL}/api/category/getAllCategories`
      );
      if (data?.success) {
        setCategories(data?.category);
      }
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    getAllCategories();
  }, []);

  console.log("Categories:", categories);

  return <div>salam</div>;
};

export default AdminPanel;
