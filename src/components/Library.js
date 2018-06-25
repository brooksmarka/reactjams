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
      <section className="library avenir link bg-turq orange">
        {this.state.albums.map((album, index) => (
          <Link to={`/album/${album.slug}`} key={index}>
            <div className="cf">
              <div className="image fl-ns w-40-ns pa4">
                <img src={album.albumCover} alt={album.title} />
              </div>
              <div className="album-info fl-ns w-60-ns pa4-ns">
                <div className="link avenir orange dim dark-gray f3 f2-ns pa2 ">
                  {album.title}
                </div>
                <div className="link avenir orange dim dark-gray f4 f3-ns fw7-ns pa2">
                  {album.artist}
                </div>
                <div className="link avenir orange dim dark-gray f5 f4-ns pa2">
                  {album.songs.length} songs
                </div>
              </div>
            </div>
          </Link>
        ))}
      </section>
    );
  }
}

export default Library;
