import { createSlice } from "@reduxjs/toolkit";


const initialState = [
    { name: 'Preeti', age: 26, course: 'MERN', batch: 'October', id: '1' },
    { name: 'Doyel', age: 23, course: 'MERN', batch: 'November', id: '2' },
    { name: 'Bidisha', age: 26, course: 'MERN', batch: 'September', id: '3' },
    { name: 'David', age: 20, course: 'MERN', batch: 'September', id: '4' },
    { name: 'Christina', age: 21, course: 'MERN', batch: 'October', id: '5' },
    { name: 'Jones', age: 20, course: 'MERN', batch: 'November', id: '6' },
    { name: 'Rick', age: 24, course: 'MERN', batch: 'October', id: '7' },
];

const StudentData = createSlice({

    name: "students",
    initialState,
    reducers: {
        addStudent(state, action) {
            state.push(action.payload);
        },
        updateStudent(state, action) {
            const { name, age, course, batch, id } = action.payload;
            const existingStudent = state.find((student) => student.id === id)
            if (existingStudent) {
                existingStudent.name = name
                existingStudent.age = age
                existingStudent.course = course
                existingStudent.batch = batch
            }
        },
    }
})

export const { addStudent, updateStudent } = StudentData.actions;

export default StudentData.reducer;