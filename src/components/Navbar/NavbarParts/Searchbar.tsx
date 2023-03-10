import React, { FormEvent, useContext, useEffect, useState } from 'react';
import { SearchContext } from '../../../contexts/search.context';
import { SearchOutlined } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';

interface Props {
  handleShow?: () => void;
}

export const Searchbar = ({ handleShow }: Props) => {
  const { search, setSearch } = useContext(SearchContext);
  const [inputValue, setInputValue] = useState(search);
  const navigate = useNavigate();
  // set search from local state
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSearch(inputValue);
    navigate(`/products/search/${inputValue}`);
    handleShow && handleShow();
  };

  useEffect(() => {
    setInputValue('');
  }, [search]);

  return (
    <>
      <form className="navbar__search-wrapper" onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="navbar__search-input"
          pattern="[A-Za-z\.]+"
          title="Please use letters only."
        />
        <IconButton type="submit">
          <SearchOutlined />
        </IconButton>
      </form>
    </>
  );
};
