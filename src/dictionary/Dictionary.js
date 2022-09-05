import React, { useState } from "react";
import Result from "./Result";
import Footer from "./Footer";
import axios from "axios";
import "./Dictionary.css";

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
    <div className="dictionaryMainContainer">
      <h2 className="text-center">This is Dictionary</h2>
      <p className="text-center">Please enter the word below</p>
      <form className="text-center" onSubmit={startSearch}>
        <input
          id="enterKeyWord"
          onChange={defineWord}
          type="search"
          autoFocus={true}
          placeholder="..we are looking for.."
        ></input>
      </form>
      <Result wordData={results} />
      <a className="upButton" href="#enterKeyWord" rel="noopener noreferrer">
        go to
        <br /> Search
      </a>
      <Footer />
    </div>
  );
}
