import React, { Component } from 'react';
import Notiflix from 'notiflix';

import { fetchQuery } from './api';

// import { Component } from 'react';
import { Wrapper } from './App.styled';
import { SearchBar } from './Searchbar/Searchbar';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import { ModalWindow } from './Modal/Modal';
import { ImageGallery } from './ImageGallery/ImageGallery';

export class App extends Component {
  state = {
    query: '',
    images: [],
    isLoading: false,
    showModal: false,
    selectedImage: null,
    currantPage: 1,
    showLoadMoreButton: false,
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
            showLoadMoreButton: resp.images.length > 0,
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
      showLoadMoreButton: false,
    });
  };

  openImageModal = imageUrl => {
    this.setState({ largeImage: imageUrl });
  };

  largeImageStateReset = () => {
    this.setState({ largeImage: '' });
  };

  handleLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  // changeQuery = newQuery => {
  //   this.setState({
  //     query: newQuery,
  //   });
  // };
  // setImages = () => {};

  render() {
    const { images, largeImage, loading, totalImages, showLoadMoreButton } =
      this.state;
    return (
      <Wrapper>
        <SearchBar onSubmit={this.searchQueryValue} />
        <ImageGallery images={images} openImageModal={this.openImageModal} />
        {loading && <Loader />}
        {showLoadMoreButton && totalImages !== images.length && (
          <Button onClick={this.handleLoadMore} />
        )}
        {/* <div>
          <form
            onSubmit={evt => {
              evt.preventDefault();

              this.changeQuery(evt.target.elements.query.value);
              evt.target.reset();
            }}
          >
            <input type="text" name="query" />
            <button type="submit">Submit</button>
          </form>
        </div>
        <div>Gallery</div>
        <div>
          <button>Load more</button>
        </div> */}
        {largeImage && (
          <ModalWindow
            largeImage={largeImage}
            largeImageStateReset={this.largeImageStateReset}
          />
        )}
      </Wrapper>
    );
  }
}
export default App;
