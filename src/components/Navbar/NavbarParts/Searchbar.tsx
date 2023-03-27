import React, { FormEvent, useContext, useEffect, useState } from 'react';
import { SearchContext } from '../../../contexts/search.context';
import { SearchOutlined } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { SearchbarStyled } from './Searchbar.styled';
import { colors } from 'styles';

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
    <SearchbarStyled onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        pattern="[A-Za-z\.]+"
        title="Please use letters only."
      />
      <IconButton
        type="submit"
        sx={{
          color: colors.primary.main,
          transition: 'color 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
          ':hover': {
            background: 'unset',
            color: colors.secondary.main,
          },
        }}
      >
        <SearchOutlined />
      </IconButton>
    </SearchbarStyled>
  );
};
