import React, { useState } from "react";
import Result from "./Result";
import Pictures from "./Pictures";
import Footer from "./Footer";
import axios from "axios";
import "./Dictionary.css";

export default function SearchForm() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState("");
  let [pic, setPic] = useState("");

  function showDictionaryResult(apiResult) {
    setResults(apiResult.data[0]);
  }

  function showPicsResult(res) {
    // console.log(res.data, "from pics");
    setPic(res.data.photos);
  }
  function startSearch(e) {
    e.preventDefault();
    if (!keyword) return;
    let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(url).then(showDictionaryResult);

    // Pixels

    let pixelsApiKey = `563492ad6f917000010000010f0d0dd4a32544a090081f829ac81e1c `;
    let pixelUrl = `https://api.pexels.com/v1/search?query=${keyword}`;
    let headers = { Authorization: `Bearer ${pixelsApiKey}` };
    axios.get(pixelUrl, { headers: headers }).then(showPicsResult);
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
      <Pictures picsInfo={pic} />
      <Footer />
    </div>
  );
}
