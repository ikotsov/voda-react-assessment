import React from "react";
import Masonry from "react-masonry-css";

function Section1(props) {
  const images = props.images.map(image => {
    return (
      <div className="section1__image">
        <img src={image.img} alt="" />
        <div className="section1__image-overlay">
          <div className="section1__image-details">
            <div className="section1__image-icon">
              <img src="/img/eye.png" alt="Eye Icon" />
            </div>
            <div className="section1__image-title">{image.title}</div>
          </div>
        </div>
      </div>
    );
  });

  const breakpoints = {
    default: 3,
    900: 2,
    700: 1
  };

  return (
    <div className="sections__content section1__content">
      <Masonry
        breakpointCols={breakpoints}
        className="vd-masonry-grid"
        columnClassName="vd-masonry-grid_column"
      >
        {images}
      </Masonry>
    </div>
  );
}

export default Section1;
