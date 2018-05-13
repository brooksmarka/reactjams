import React from "react";

const Landing = () => (
  <section className="landing">
    <h1 className="hero-title f1">Turn the music up!</h1>

    <section className="selling-points">
      <div className="point">
        <h2 className="point-title f3">Choose your music</h2>
        <p className="point-description f5">
          The world is full of music; why should you have to listen to music
          that someone else chose?
        </p>
      </div>
      <div className="point">
        <h2 className="point-title f3">Unlimited, streaming, ad-free</h2>
        <p className="point-description f5">
          No arbitrary limits. No distractions.
        </p>
      </div>
      <div className="point">
        <h2 className="point-title f3">Mobile enabled</h2>
        <p className="point-description f5">
          Listen to your music on the go. This streaming service is available on
          all mobile platforms.
        </p>
      </div>
    </section>
  </section>
);

export default Landing;
