import React from "react";
// import { useSearch } from "../context/search";
// import axios from "axios";
// import config from "../config";
import { useNavigate } from "react-router-dom";
// import { SearchOutlined } from "@ant-design/icons";
import { Input } from "antd";
import { SearchIcon } from "../assets/icons";

const { Search } = Input;

const SearchInput: React.FC = () => {
  //   const apiUrl: string = config.apiUrl;
  //   const [search, setSearch] = useSearch();
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      //   const { data } = await axios.get(
      //     `${apiUrl}/api/v1/product/search/${keyword}`
      //   );
      //   setSearch({ ...search, keyword, results: data });
      navigate(`search`);
    } catch (error) {
      console.log(error);
    }
  };

  //   const handleSearch = (keyword: string) => {
  //     handleSubmit(keyword);
  //   };

  //   const handleEnterPress = (e: KeyboardEvent<HTMLInputElement>) => {
  //     if (e.key === "Enter") {
  //       e.preventDefault(); // <-- Prevent form submission
  //       handleSubmit(e.currentTarget.value);
  //     }
  //   };

  //   const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
  //     setSearch({ ...search, keyword: e.target.value });
  //   };

  return (
    <div>
      <Search
        placeholder="Ərizə adı və ya söz axtar"
        allowClear
        type="text"
        enterButton={
          <button className="search-btn">
            <img className="search-icon" src={SearchIcon} alt="" />
            Axtar
          </button>
        }
        size="large"
        onSearch={handleSubmit}
      />
    </div>
  );
};

export default SearchInput;
