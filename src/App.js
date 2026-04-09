import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

/**
 * HEADER
 *    - LOGO
 *    - HEADER LINKS (NAV ITEMS)
 *
 *
 * BODY
 *    - SEARCHBAR
 *    - RES CONTAINER
 *         - RES CARDS
 * FOOTER
 */

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
