import React, { useState } from "react";
import SearchForm from "./SearchForm";

export default function Dictionary() {
  let [dictionaryWord, setDictionaryWord] = useState();

  function upKeyword(value) {
    setDictionaryWord(value);
  }

  console.log(dictionaryWord, "dictionary main");
  return (
    <section>
      <h2>This is Dictionary</h2>
      <p>Please enter the word below</p>
      <SearchForm updWord={upKeyword} />
    </section>
  );
}
