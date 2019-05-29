import React from "react";
import { render } from "react-dom";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

import "./index.html";
import AppRouter from "./AppRouter";

library.add(fas);

const app = document.querySelector("#app");

if (app) {
    render(<AppRouter />, app);
}
