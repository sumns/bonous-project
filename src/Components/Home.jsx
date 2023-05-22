import React from "react";
import "../App";
function Home({ handleLocalStorage }) {
  return (
    <div className="home">
      <div className="homeContainer">
        <h1>Task page</h1>
        <button onClick={handleLocalStorage}>Clear</button>
      </div>
    </div>
  );
}
export default Home;
