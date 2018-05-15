import React from "react";

const Landing = () => (
  <section className="landing bg-turq">
    <div className="hero-title purp f1 pv3">Turn the music up!</div>

    <section className="selling-points cf ph2-ns ">
      <div className="point fl w-100 w-third-ns pa2">
        <h2 className="point-title orange f2">Choose your music</h2>
        <p className="point-description pa2 light-turq f4">
          The world is full of music. Why should you have to listen to music
          that someone else chose?
        </p>
      </div>
      <div className="point fl w-100 w-third-ns pa2">
        <h2 className="point-title  orange f2">
          Unlimited, streaming, ad-free
        </h2>
        <p className="point-description pa2 light-turq f4">
          No arbitrary limits. No distractions.
        </p>
      </div>
      <div className="point fl w-100 w-third-ns pa2">
        <h2 className="point-title orange f2">Mobile enabled</h2>
        <p className="point-description pa2 light-turq f4">
          Listen to your music on the go. This streaming service is available on
          all mobile platforms.
        </p>
      </div>
    </section>
  </section>
);

export default Landing;
