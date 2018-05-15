import React from "react";

const Landing = () => (
  <section className="landing bg-turq">
    <h1 className="hero-title purp">Turn the music up!</h1>

    <section className="selling-points">
      <div className="point">
        <h2 className="point-title orange">Choose your music</h2>
        <p className="point-description light-turq">
          The world is full of music. Why should you have to listen to music
          that someone else chose?
        </p>
      </div>
      <div className="point">
        <h2 className="point-title orange">Unlimited, streaming, ad-free</h2>
        <p className="point-description light-turq">
          No arbitrary limits. No distractions.
        </p>
      </div>
      <div className="point">
        <h2 className="point-title orange">Mobile enabled</h2>
        <p className="point-description light-turq">
          Listen to your music on the go. This streaming service is available on
          all mobile platforms.
        </p>
      </div>
    </section>
  </section>
);

export default Landing;
