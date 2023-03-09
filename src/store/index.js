import { configureStore } from "@reduxjs/toolkit";
import workInfo from "./slices/workInfo.slice";

export default configureStore({
    reducer: {
        workInfo
    }
})