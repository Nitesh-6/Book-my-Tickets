import { configureStore } from "@reduxjs/toolkit";

import todoSclice from "./todoSclice";

let store = configureStore({ reducer: { todo: todoSclice } });

export default store;