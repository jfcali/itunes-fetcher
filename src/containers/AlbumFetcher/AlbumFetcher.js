import React, { Component } from 'react';
import styles from './AlbumFetcher.module.css';
import { connect } from 'react-redux';

import { goToNavigation } from '../../store/actions/actions';
import SearchBar from '../../components/SearchBar/SearchBar';
import Catalogue from '../../components/Catalogue/Catalogue';
import Navigation from '../../components/Navigation/Navigation';

class AlbumFetcher extends Component {
  state = {
    sticky: false
  };

  componentDidMount() {
    // TODO: AVOID CALLING SET STATE EVERYTIME
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

  render() {
    return (
      <div className={styles.AlbumFetcher}>
        <SearchBar sticky={this.state.sticky} loading={this.props.loading} />
        <Catalogue
          sticky={this.state.sticky}
          loading={this.props.loading}
          albums={this.props.albums}
          currentPage={this.props.currentPage}
          albumsPerPage={this.props.albumsPerPage}
        />
        <Navigation
          currentPage={this.props.currentPage}
          totalPages={this.props.totalPages}
          goTo={this.props.goTo}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { loading, albums, currentPage, albumsPerPage, totalPages } = state;

  return {
    loading,
    albums: albums,
    currentPage,
    totalPages,
    albumsPerPage
  };
};

const mapDispatchToProps = dispatch => {
  return {
    goTo: ({ index }) => dispatch(goToNavigation({ index }))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AlbumFetcher);
