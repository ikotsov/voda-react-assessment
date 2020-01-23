import React, { Component } from "react";

function Tiles({ tiles }) {
  return tiles.map(tile => {
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
}

class Page2 extends Component {
  render() {
    return (
      <div className="page page2">
        <h1 className="page__title">{this.props.description}</h1>
        <div className="page__content">
          <div className="tiles">
            <Tiles tiles={this.props.tiles} />
          </div>
        </div>
      </div>
    );
  }
}

export default Page2;
