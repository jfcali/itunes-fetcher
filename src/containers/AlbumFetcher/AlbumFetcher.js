import React, { Component } from 'react';
import styles from './AlbumFetcher.module.css';
import { connect } from 'react-redux';

import SearchBar from '../../components/SearchBar/SearchBar';
import Catalogue from '../../components/Catalogue/Catalogue';

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
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { loading, albums } = state;
  console.log(albums);
  return {
    loading,
    albums: albums
  };
};

export default connect(mapStateToProps)(AlbumFetcher);
