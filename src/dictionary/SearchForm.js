import React, { useState } from "react";

export default function SearchForm({ updWord }) {
  let [keyword, setKeyword] = useState("");
  function startSearch(e) {
    e.preventDefault();
    updWord(keyword);
  }

  function defineWord(e) {
    setKeyword(e.target.value);
  }

  return (
    <form onSubmit={startSearch}>
      <input
        onChange={defineWord}
        type="search"
        autoFocus={true}
        placeholder="..we are looking for.."
      ></input>
    </form>
  );
}
