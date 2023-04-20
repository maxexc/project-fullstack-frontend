import React, { useState } from 'react';
import SearchForm from 'components/SearchForm/SearchForm';
import { SearchBarWrapper, SearchTypeSelectorBox } from './SearchBar.styled';
import SearchTypeSelector from 'components/SearchTypeSelector/SearchTypeSelector';

//-------------
export default function SearchBar(props) {
  const { onTypeChange, selectedType, onSubm, searchQuery } = props;
  const [searchWord, setSearchWord] = useState(searchQuery || '');

  function handleSearchWordChange(word) {
    setSearchWord(word);
  }
  return (
    <SearchBarWrapper>
      <SearchForm
        onSubm={onSubm}
        searchQuery={searchWord}
        isSearchPage
        onSearchWordChange={handleSearchWordChange}
      />
      <SearchTypeSelectorBox>
        <SearchTypeSelector
          onChange={onTypeChange}
          selectedType={selectedType}
          searchWord={searchWord}
        />
      </SearchTypeSelectorBox>
    </SearchBarWrapper>
  );
}
