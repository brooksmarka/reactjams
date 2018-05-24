import React, { Component } from "react";
import { Link } from "react-router-dom";
import albumData from "./../data/albums";

class Library extends Component {
  constructor(props) {
    super(props);
    this.state = { albums: albumData };
  }

  render() {
    return (
      <section className="library av link bg-turq orange">
        {this.state.albums.map((album, index) => (
          <Link to={`/album/${album.slug}`} key={index}>
            <img src={album.albumCover} alt={album.title} />
            <div className="link av orange dim dark-gray f1">{album.title}</div>
            <div className="link av orange dim dark-gray f3">
              {album.artist}
            </div>
            <div className="link av orange dim dark-gray f4">
              {album.songs.length} songs
            </div>
          </Link>
        ))}
      </section>
    );
  }
}

export default Library;
