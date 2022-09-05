import React, { useState } from "react";
import Result from "./Result";
import axios from "axios";

export default function SearchForm() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState("");

  function showSearchResult(apiResult) {
    setResults(apiResult.data[0]);
  }
  function startSearch(e) {
    e.preventDefault();
    if (!keyword) return;
    let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(url).then(showSearchResult);
  }

  function defineWord(e) {
    setKeyword(e.target.value);
  }

  return (
    <div>
      <form onSubmit={startSearch}>
        <input
          onChange={defineWord}
          type="search"
          autoFocus={true}
          placeholder="..we are looking for.."
        ></input>
      </form>
      <Result wordData={results} />
    </div>
  );
}
