import React from "react";

function Page2(props) {
  const tiles = props.tiles.map(tile => {
    return (
      <div className="tile">
        <div className="tile__icon">
          <img src={`/img/${tile.icon}.png`} alt="" />
        </div>
        <div className="tile__title">{tile.title}</div>
        <div className="tile__description">{tile.description}</div>
        <a className="tile__link" href="https://www.google.gr/">
          {tile.link}
        </a>
      </div>
    );
  });

  return (
    <div className="page page2">
      <h1 className="page__title">{props.description}</h1>
      <div className="page__content">
        <div className="tiles">{tiles}</div>
      </div>
    </div>
  );
}

export default Page2;
