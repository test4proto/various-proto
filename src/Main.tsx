import React from "react";
import { render } from "react-dom";
import App from "./App";

import "./index.html";

const app = document.querySelector("#app");

if (app) {
    render(<App />, app);
}
