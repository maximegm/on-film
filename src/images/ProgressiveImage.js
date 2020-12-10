import React from "react";
import ProgressiveImage from "react-progressive-image";

function ProgressiveImg(props) {
  return (
    <>
      <ProgressiveImage
        src={props.image}
        srcSetData={{
          srcSet: `${props.small} 320w, ${props.medium} 700w, ${props.large} 2000w`,
          sizes: "(max-width: 2000px) 100vw, 2000px",
        }}
        placeholder={props.jpg}
      >
        {(src, _loading, srcSetData) => (
          <img
            src={src}
            srcSet={srcSetData.srcSet}
            sizes={srcSetData.sizes}
            alt={props.title}
          />
        )}
      </ProgressiveImage>
    </>
  );
}

export default ProgressiveImg;
