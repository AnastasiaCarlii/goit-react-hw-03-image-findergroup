import React from 'react';
import PropTypes from 'prop-types';
// import { StyledBsSearch } from './Searchbar.styled';
// import { MdImageSearch } from 'react-icons/md';

import { Header, Form, Button, ButtonLabel, Input } from './Searchbar.styled';

export const SearchBar = ({ onSubmit }) => {
  const handleSubmit = evt => {
    evt.preventDefault();
    const query = evt.target.elements.query.value;
    onSubmit(query);
  };

  return (
    <Header>
      <Form onSubmit={handleSubmit}>
        <Button type="submit">
          <ButtonLabel>
            <span class="button-label">Search</span>
          </ButtonLabel>
        </Button>
        <Input
          type="text"
          name="query"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </Form>
    </Header>
  );
};
SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
