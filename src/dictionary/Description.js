import React from "react";
import Definition from "./Definition";

export default function Description({ meaning }) {
  // console.log(meaning.definitions);
  let arrayOfDefinitions = meaning.definitions;
  function showListOfDEfinitions(item, i) {
    return <Definition definition={item} key={i} />;
  }
  return (
    <div>
      <h4>{meaning.partOfSpeech}</h4>
      {arrayOfDefinitions.map(showListOfDEfinitions)}
    </div>
  );
}
