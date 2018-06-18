import React, { Component } from "react";
import albumData from "./../data/albums";
import Album from "./Album";

class SongList extends Component {
  render() {
    return (
      <table className="w-90 collapse fw7" id="song-list av">
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
            >
              <td className="song-actions pl4 tl">
                <span className="song-number dim mr3 av orange">
                  {index + 1}
                </span>
                <button className="button bw0 ba link br-pill dim mb3 dib white bg-dark-purple">
                  <span className="ion-play v-mid mr2 av turq" />
                  <span className="ion-pause v-mid av turq" />
                </button>
              </td>
              <td className="song-title tj dim av orange">{song.title}</td>
              <td className="song-duration tr dim av pr2 pr0-ns orange">
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
