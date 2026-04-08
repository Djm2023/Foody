import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("h1", { id: "first_div" }, ["This is h1 tag."]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
