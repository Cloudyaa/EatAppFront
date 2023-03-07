import React, { FormEvent, useContext, useState } from 'react';
import { SearchContext } from '../../../contexts/search.context';
import { SearchOutlined } from '@mui/icons-material';
import { IconButton } from '@mui/material';

export const Searchbar = () => {
  const { search, setSearch } = useContext(SearchContext);
  const [inputValue, setInputValue] = useState(search);

  // set search from local state
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSearch(inputValue);
  };

  return (
    <>
      <form className="navbar__search-wrapper">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="navbar__search-input"
        />
        <IconButton onClick={handleSubmit}>
          <SearchOutlined />
        </IconButton>
      </form>
    </>
  );
};
