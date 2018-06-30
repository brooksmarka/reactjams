import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { playSong, pauseSong } from "../actions/player_actions";

class Player extends Component {
  static propTypes = {
    isPlaying: PropTypes.bool,
    playSong: PropTypes.func,
    pauseSong: PropTypes.func
  };

  static defaultProps = {};

  render() {
    return (
      <div className="Player">Playing?{this.props.isPlaying.toString()}</div>
    );
  }
}

function mapStateToProps({ player }) {
  console.log(player);
  return {
    player: player,
    isPlaying: player.isPlaying
  };
}

export default connect(
  mapStateToProps,
  { playSong, pauseSong }
)(Player);
