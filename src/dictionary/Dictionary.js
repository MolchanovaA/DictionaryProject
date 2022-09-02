import React, { useState } from "react";
import SearchForm from "./SearchForm";
import axios from "axios";

export default function Dictionary() {
  let [dictionaryWord, setDictionaryWord] = useState();

  function upKeyword(value) {
    setDictionaryWord(value);
  }
  function showSearchResult(res) {
    console.log(res, "test");
  }

  if (dictionaryWord) {
    let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${dictionaryWord}`;
    axios.get(url).then(showSearchResult);
  }
  return (
    <section>
      <h2>This is Dictionary</h2>
      <p>Please enter the word below</p>
      <SearchForm updWord={upKeyword} />
    </section>
  );
}
