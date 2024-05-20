import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
        This is a skin-friendly oil extracted from Glycine Soja consisting of oleic acid, linoleic acid, 
        and linolenic acid. It gently dissolves wastes without clogging the skin pores and, at the same time, 
        acts as a conditioning agent to smooth the skin.
        </p>
        <p>
          Each product usually has its own dedicated page
          with relevant information.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
