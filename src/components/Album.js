import React, { Component } from "react";
import albumData from "./../data/albums";
import PlayerBar from "./PlayerBar";
import SongList from "./SongList";

class Album extends Component {
  constructor(props) {
    super(props);

    const album = albumData.find(album => {
      console.log(album);
      return album.slug === this.props.match.params.slug;
    });

    this.state = {
      album: album,
      currentSong: album.songs[0],
      currentTime: 0,
      duration: album.songs[0].duration,
      isPlaying: false,
      volume: 0.8
    };

    this.audioElement = document.createElement("audio");
    this.audioElement.src = album.songs[0].audioSrc;
  }

  play() {
    this.audioElement.play();
    this.setState({ isPlaying: true });
  }

  pause() {
    this.audioElement.pause();
    this.setState({ isPlaying: false });
  }

  componentDidMount() {
    this.eventListeners = {
      timeupdate: e => {
        this.setState({ currentTime: this.audioElement.currentTime });
      },
      durationchange: e => {
        this.setState({ duration: this.audioElement.duration });
      },
      volumechange: e => {
        this.setState({ volume: this.audioElement.volume });
      }
    };
    this.audioElement.addEventListener(
      "timeupdate",
      this.eventListeners.timeupdate
    );
    this.audioElement.addEventListener(
      "durationchange",
      this.eventListeners.durationchange
    );
    this.audioElement.addEventListener(
      "volumechange",
      this.eventListeners.volumechange
    );
  }

  componentWillUnmount() {
    this.audioElement.src = null;
    this.audioElement.removeEventListener(
      "timeupdate",
      this.eventListeners.timeupdate
    );
    this.audioElement.removeEventListener(
      "durationchange",
      this.eventListeners.durationchange
    );
    this.audioElement.removeEventListener(
      "volumechange",
      this.eventListeners.volumechange
    );
  }

  setSong(song) {
    this.audioElement.src = song.audioSrc;
    this.setState({ currentSong: song });
  }

  handleSongClick(song) {
    const isSameSong = this.state.currentSong === song;
    if (this.state.isPlaying && isSameSong) {
      this.pause();
    } else {
      if (!isSameSong) {
        this.setSong(song);
      }
      this.play();
    }
  }

  handlePrevClick() {
    const currentIndex = this.state.album.songs.findIndex(
      song => this.state.currentSong === song
    );
    const newIndex = Math.max(0, currentIndex - 1);
    const newSong = this.state.album.songs[newIndex];
    this.setSong(newSong);
    this.play(newSong);
  }

  handleNextClick() {
    const currentIndex = this.state.album.songs.findIndex(
      song => this.state.currentSong === song
    );
    const newIndex = Math.min(
      this.state.album.songs.length - 1,
      currentIndex + 1
    );
    const newSong = this.state.album.songs[newIndex];
    this.setSong(newSong);
    this.play(newSong);
  }

  handleTimeChange(e) {
    const newTime = this.audioElement.duration * e.target.value;
    this.audioElement.currentTime = newTime;
    this.setState({ currentTime: newTime });
  }

  handleVolumeChange(e) {
    const newVolume = e.target.value * 0.01;
    this.audioElement.volume = newVolume;
    this.setState({ volume: newVolume });
  }

  formatTime(secs) {
    function addZero(n) {
      return n < 10 ? "0" + n : n;
    }

    var h = Math.floor(secs / 3600);
    var m = Math.floor(secs / 60) - h * 60;
    var s = Math.floor(secs - h * 3600 - m * 60);

    return addZero(m) + ":" + addZero(s);
  }

  render() {
    return (
      <section className="album av bg-turq orange">
        <section className="cf" id="album-info">
          <div className="image fl-ns w-40-ns pa4">
            <img
              id="album-cover-art"
              alt="album-cover-art"
              src={this.state.album.albumCover}
            />
          </div>
          <div className="album-details fl-ns w-60-ns av pa4-ns">
            <div className="album-title f3 f2-ns pa2" id="album-title">
              {this.state.album.title}
            </div>
            <div className="artist f4 f3-ns pa2 fw7">
              {this.state.album.artist}
            </div>
            <div className="release-info f5 f4-ns pa2 pb4" id="release-info">
              {this.state.album.releaseInfo}
            </div>
            <PlayerBar
              isPlaying={this.state.isPlaying}
              currentSong={this.state.currentSong}
              currentTime={this.audioElement.currentTime}
              duration={this.audioElement.duration}
              handleSongClick={() =>
                this.handleSongClick(this.state.currentSong)
              }
              handlePrevClick={() => this.handlePrevClick()}
              handleNextClick={() => this.handleNextClick()}
              handleTimeChange={e => this.handleTimeChange(e)}
              handleVolumeChange={e => this.handleVolumeChange(e)}
              formatTime={t => this.formatTime(t)}
            />
          </div>
          <SongList
            album={this.state.album}
            handleSongClick={() => this.handleSongClick(this.state.currentSong)}
            formatTime={t => this.formatTime(t)}
          />
        </section>
      </section>
    );
  }
}

export default Album;
