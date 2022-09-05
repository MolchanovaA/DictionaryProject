import React from "react";
import Definition from "./Definition";
import "./Description.css";

export default function Description({ meaning }) {
  // console.log(meaning.definitions);
  let arrayOfDefinitions = meaning.definitions;
  function showListOfDEfinitions(item, i) {
    return <Definition definition={item} key={i} />;
  }
  return (
    <div className="wordDescriptionByPartOfSpeech">
      <h4>{meaning.partOfSpeech}</h4>
      {arrayOfDefinitions.map(showListOfDEfinitions)}
    </div>
  );
}
