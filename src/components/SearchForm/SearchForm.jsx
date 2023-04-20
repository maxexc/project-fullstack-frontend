import React, { useState } from 'react';
import { SearchesForm, SearchInput, SearchBtn } from './SearchForm.styled';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
//------------------------------------------
export default function SearchForm({
  onSubm,

  searchQuery,

  isSearchPage,
  onSearchWordChange,
}) {
  const [searchWord, setSearchWord] = useState(searchQuery || '');

  const handleChange = evt => {
    const word = evt.currentTarget.value;
    setSearchWord(word);
    onSearchWordChange(word);
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    if (searchWord.trim() === '') {
      setSearchWord('');
      Notify.warning('Please fill the search form');
    }

    onSubm(searchWord);
  };
  return (
    <SearchesForm
      onSubmit={handleSubmit}
      page={isSearchPage ? 'search' : 'main'}
    >
      <SearchInput
        placeholder="Enter the text"
        value={searchWord}
        onChange={handleChange}
        page={isSearchPage ? 'search' : 'main'}
      />
      <SearchBtn page={isSearchPage ? 'search' : 'main'}>Search</SearchBtn>
    </SearchesForm>
  );
}
