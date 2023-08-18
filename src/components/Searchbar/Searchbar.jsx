import React from 'react';
import PropTypes from 'prop-types';
import {
  Header,
  Form,
  Button,
  ButtonLabel,
  Input,
} from 'components/Searchbar/Searchbar.styled';

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
          <ButtonLabel>Search</ButtonLabel>
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
