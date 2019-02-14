import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as FavoriteActions from '~/store/actions/favorites';
import PropTypes from 'prop-types';
import withRoot from '~/styles';
import { withStyles } from '@material-ui/core';

const styles = {
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};

class Main extends Component {
  static defaultProps = {
    inputRepo: 'facebook/react',
  };

  static propTypes = {
    addFavorite: PropTypes.func.isRequired,
    inputRepo: PropTypes.string,
    favorites: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        description: PropTypes.string,
        url: PropTypes.string,
      }),
    ).isRequired,
  };

  state = {
    inputRepo: 'aaaa',
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addFavorite();
    console.log(this.state.inputRepo);
  };

  render() {
    return (
      <Fragment>
        <form onSubmit={this.handleSubmit}>
          <input
            placeholder="user/repo"
            value={this.state.nputRepo}
            onChange={e => this.setState({ inputRepo: e.target.value })}
          />
          <button type="submit">Submit</button>
        </form>
        <ul>
          {this.props.favorites.map(item => (
            <li key={item.id}>
              <p>
                <strong>{item.name}</strong>
                (
                {item.description}
                )
              </p>
              <a href={item.url}>Link to</a>
            </li>
          ))}
        </ul>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  favorites: state.favorites,
});

const mapDispatchToProps = dispatch => bindActionCreators(FavoriteActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRoot(withStyles(styles)(Main)));
