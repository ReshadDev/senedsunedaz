import React, { ChangeEvent, KeyboardEvent, useState } from "react";
import { useSearch } from "../context/search";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Input } from "antd";
import { SearchIcon } from "../assets/icons";
import { APIURL } from "../config";

const { Search } = Input;

const SearchInput: React.FC = () => {
  const [search, setSearch] = useSearch();
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState<string>("");
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [, setSearchResults] = useState<any[]>([]);

  const handleSubmit = async () => {
    try {
      const { data } = await axios.get(
        `${APIURL}/api/application/specification?docName=${keyword}`
      );
      setSearchResults(data.content);
      setSearch({ ...search, keyword, results: data.content });
      navigate(`search`);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearch = (value: string) => {
    setKeyword(value);
    handleSubmit();
  };

  const handleEnterPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSubmit();
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

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
        value={keyword}
        onChange={handleChange}
        onSearch={keyword ? handleSearch : undefined}
        onPressEnter={handleEnterPress}
      />
    </div>
  );
};

export default SearchInput;
