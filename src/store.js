import { configureStore } from "@reduxjs/toolkit";
import studentsReducer from "./Component/StudentData";

export default configureStore({
    reducer: {
        students: studentsReducer,
    },
});