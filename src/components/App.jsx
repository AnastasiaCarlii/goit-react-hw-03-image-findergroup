import React, { Component } from 'react';
import Notiflix from 'notiflix';

import { fetchQuery } from './api';
import { Wrapper } from './App.styled';
import { SearchBar } from './Searchbar/Searchbar';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import { ModalWindow } from './Modal/Modal';
import { ImageGallery } from './ImageGallery/ImageGallery';

export class App extends Component {
  state = {
    searchQuery: '',
    images: [],
    page: 1,
    totalImages: 0,
    loading: false,
    showModal: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const { searchQuery, page } = this.state;
    if (prevState.searchQuery !== searchQuery || prevState.page !== page) {
      this.setState({ loading: true });

      fetchQuery(searchQuery, page)
        .then(resp =>
          this.setState(prevState => ({
            images: [...prevState.images, ...resp.images],
            totalImages: resp.TotalHits,
          }))
        )
        .catch(error => console.log(error))
        .finally(() => this.setState({ loading: false }));
    }
  }

  searchQueryValue = value => {
    if (value === this.state.searchQuery) {
      Notiflix.Notify.warning('Enter another search query!');
      return;
    }

    this.setState({
      searchQuery: value,
      page: 1,
      totalImages: 0,
      images: [],
    });
  };

  openImageModal = largeImageURL => {
    this.setState({ showModal: largeImageURL });
  };

  showModalStateReset = () => {
    this.setState({ showModal: '' });
  };

  handleLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };
  render() {
    const { images, showModal, loading, totalImages } = this.state;
    return (
      <Wrapper>
        <SearchBar onSubmit={this.searchQueryValue} />
        <ImageGallery images={images} openImageModal={this.openImageModal} />
        {loading && <Loader />}
        {totalImages !== images.length && !loading && (
          <Button onClick={this.handleLoadMore} />
        )}

        {showModal && (
          <ModalWindow
            isOpen={!!showModal}
            showModalStateReset={this.showModalStateReset}
            largeImageURL={showModal}
          />
        )}
      </Wrapper>
    );
  }
}
export default App;
