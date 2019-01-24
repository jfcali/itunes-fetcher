import React, { Component, Fragment } from 'react';
import styles from './AlbumFetcher.module.css';
import { connect } from 'react-redux';

import { goToNavigation, getAlbums } from '../../store/actions/actions';
import SearchBar from '../../components/SearchBar/SearchBar';
import Catalogue from '../../components/Catalogue/Catalogue';
import Navigation from '../../components/Navigation/Navigation';
import Message from '../../components/Message/Message';

export class AlbumFetcher extends Component {
  state = {
    sticky: false,
    list: false
  };

  componentDidMount() {
    window.addEventListener('scroll', e => {
      if (window.scrollY > 100 && this.state.sticky === false) {
        this.setState({
          sticky: true
        });
      } else if (window.scrollY <= 100 && this.state.sticky) {
        this.setState({
          sticky: false
        });
      }
    });
  }

  toggleViewMode = () => {
    this.setState(state => {
      const currentView = state.list;
      return {
        list: !currentView
      };
    });
  };

  render() {
    return (
      <div
        className={
          this.state.sticky
            ? [styles.AlbumFetcher, styles.Sticky].join(' ')
            : styles.AlbumFetcher
        }
      >
        <SearchBar
          sticky={this.state.sticky}
          loading={this.props.loading}
          fetchAlbums={this.props.fetchAlbums}
        />
        {this.props.initialLoad &&
        this.props.albums.length &&
        !this.props.loading ? (
          <Fragment>
            <Catalogue
              sticky={this.state.sticky}
              loading={this.props.loading}
              albums={this.props.albums}
              currentPage={this.props.currentPage}
              albumsPerPage={this.props.albumsPerPage}
              error={this.props.error}
              toggleViewMode={this.toggleViewMode.bind(this)}
              list={this.state.list}
            />
            <Navigation
              currentPage={this.props.currentPage}
              totalPages={this.props.totalPages}
              goTo={this.props.goTo}
            />
          </Fragment>
        ) : (
          <Message
            emptySearch={this.props.initialLoad}
            loading={this.props.loading}
            error={this.props.error}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  const {
    loading,
    albums,
    currentPage,
    albumsPerPage,
    totalPages,
    error,
    initialLoad
  } = state;

  return {
    loading,
    albums: albums,
    currentPage,
    totalPages,
    albumsPerPage,
    error,
    initialLoad
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAlbums: ({ query }) => dispatch(getAlbums({ query })),
    goTo: ({ index }) => dispatch(goToNavigation({ index }))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AlbumFetcher);
