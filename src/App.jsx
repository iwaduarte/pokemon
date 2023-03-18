import React from "react";
import GlobalStyled from "../src/assets/styles/globalStyled.js";
import Routes from "./routes";

if (import.meta.hot) {
  import.meta.hot.on("vite:beforeUpdate", () => console.clear());
}

function App() {
  return (
    <>
      <GlobalStyled />
      <Routes />
    </>
  );
}

export default App;
