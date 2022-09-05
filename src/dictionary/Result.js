import React from "react";
import Description from "./Description";

export default function Result({ wordData }) {
  // console.log(wordData, "from result");
  let wordMeaningsArr = wordData.meanings;
  if (wordData) {
    return (
      <div>
        <h3>
          {wordData.word} [{wordData.phonetic}]
        </h3>
        {wordMeaningsArr.map((item, i) => {
          return (
            <div key={i}>
              <Description meaning={item} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
