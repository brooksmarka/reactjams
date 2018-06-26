import React, { Component } from "react";

class SongList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isHovering: false
    };
  }
  render() {
    return (
      <table className="w-90 collapse fw7" id="song-list avenir">
        <colgroup>
          <col className="w-5" id="song-number-column" />
          <col className="w-85" id="song-title-column" />
          <col className="w-5" id="song-duration-column" />
        </colgroup>
        <tbody>
          {this.props.album.songs.map((song, index) => (
            <tr
              className="song"
              key={index}
              onClick={() => this.props.handleSongClick(song)}
              onMouseEnter={() => this.setState({ isHovering: index })}
              onMouseLeave={() => this.setState({ isHovering: false })}
            >
              <td className="song-actions pl4 tl">
                <button className="button bw0 ba link br-pill dim mb3 dib white bg-dark-purple">
                  {this.props.currentSong.title === song.title ? (
                    <span
                      className={
                        this.props.isPlaying
                          ? "ion-ios-pause v-mid ml1 mr1 avenir turq"
                          : "ion-ios-play v-mid ml1 mr1 avenir turq"
                      }
                    />
                  ) : this.state.isHovering === index ? (
                    <span className="ion-ios-play v-mid ml1 mr1 avenir turq" />
                  ) : (
                    <span className="song-number v-mid ml1 mr1 avenir turq">
                      {index + 1}
                    </span>
                  )}
                </button>
              </td>
              <td className="song-title tj dim avenir orange">{song.title}</td>
              <td className="song-duration tr dim avenir pr2 pr0-ns orange">
                {this.props.formatTime(song.duration)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default SongList;
