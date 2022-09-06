import React from "react";
import "./Pictures.css";

export default function Puctures({ picsInfo }) {
  if (!picsInfo) return;

  function renderPhotos(item, i) {
    return (
      <li key={i} className="col-md-3 col-sm-5 picContainer">
        <a
          data-content={item.photographer}
          href={item.src.original}
          rel="noopener noreferrer"
          target="_blank"
          className="pic"
        >
          <img className="img-fluid " src={item.src.small} alt={item.alt}></img>
        </a>
      </li>
    );
  }
  return (
    <section className="picsMainContainer ">
      <ul className="row justify-content-between">
        {picsInfo.map(renderPhotos)}
      </ul>
      <a
        href="https://www.pexels.com"
        rel="noopener noreferrer"
        target="_blank"
      >
        Photos provided by Pexels
      </a>
    </section>
  );
}
