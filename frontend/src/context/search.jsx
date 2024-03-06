import React, { useState, useContext, createContext, useEffect } from "react";

const SearchContext = createContext();
const SearchProvider = ({ children }) => {
  const storedResults = JSON.parse(localStorage.getItem("searchResults")) || [];
  const storedKeyword = localStorage.getItem("searchKeyword") || "";

  const [search, setSearch] = useState({
    keyword: storedKeyword,
    results: storedResults,
  });

  useEffect(() => {
    localStorage.setItem("searchResults", JSON.stringify(search.results));
    localStorage.setItem("searchKeyword", search.keyword);
  }, [search.results, search.keyword]);

  return (
    <SearchContext.Provider value={[search, setSearch]}>
      {children}
    </SearchContext.Provider>
  );
};

const useSearch = () => useContext(SearchContext);

export { useSearch, SearchProvider };
