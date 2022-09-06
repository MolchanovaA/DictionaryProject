import React from "react";
import Description from "./Description";
import PlayIcon from "./PlayIcon";
import "./Result.css";

export default function Result({ wordData }) {
  let wordMeaningsArr = wordData.meanings;

  if (wordData) {
    // console.log(wordData.phonetics[0].audio);
    return (
      <section className="wordMainDescription">
        <h3 className="text-center keyWord">{wordData.word}</h3>
        <h4 className="text-center">
          {wordData.phonetic ? `[${wordData.phonetic}]` : ""}{" "}
          {wordData.phonetics[0] ? (
            <PlayIcon audioLink={wordData.phonetics[0].audio} />
          ) : (
            ""
          )}
        </h4>

        {wordMeaningsArr.map((item, i) => {
          return <Description meaning={item} key={i} />;
        })}
      </section>
    );
  } else {
    return null;
  }
}
