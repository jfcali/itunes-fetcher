import React, { Component } from 'react';
import styles from './SearchBar.module.css';

import Field from '../UI/Field/Field';
import Clear from '../UI/Clear/Clear';
import Submit from '../UI/Submit/Submit';

class SearchBar extends Component {
  state = {
    query: ''
  };

  updateText = e => {
    this.setState({
      query: e.target.value
    });
  };

  clearText = () => {
    this.setState({
      query: ''
    });
  };

  handleEnter = e => {
    if (e.key === 'Enter' && this.state.query && this.state.query.length) {
      document.title = `iTunes search - ${this.state.query}`;
      this.props.fetchAlbums({ query: this.state.query });
    }
  };

  render() {
    const classes = [styles.SearchBar];
    if (this.props.sticky) classes.push(styles.Sticky);
    return (
      <header className={classes.join(' ')}>
        <Field
          type="text"
          value={this.state.query}
          onChange={this.updateText.bind(this)}
          onKeyPress={this.handleEnter}
          disabled={this.props.loading}
          placeholder="Search for artists, albums, songs..."
          autoFocus
        />
        <Clear
          clickhandler={this.clearText.bind(this)}
          disabled={
            this.props.loading || (this.state.query.length > 0 ? false : true)
          }
        >
          x
        </Clear>
        <Submit
          clicked={() => {
            return this.props.fetchAlbums({ query: this.state.query });
          }}
          disabled={
            this.props.loading || (this.state.query.length > 0 ? false : true)
          }
        >
          SEARCH
        </Submit>
      </header>
    );
  }
}
export default SearchBar;
