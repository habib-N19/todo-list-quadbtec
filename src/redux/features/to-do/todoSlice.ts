import { TTodoState } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

const initialState: TTodoState = {
	todos: [],
};
const todoSlice = createSlice({
	name: "todo",
	initialState: initialState,
	reducers: {
		addToDo: (state, action) => {
			const { task } = action.payload;
			const id = state.todos.length + 1;

			state.todos.push({
				id: id.toString(),
				task: task,
				running: false,
				completed: false,
			});
		},
		markAsRunning: (state, action) => {
			state.todos = state.todos.map((todo) =>
				todo.id === action.payload
					? {
							...todo,
							running: !todo.running,
							completed: false,
					  }
					: todo
			);
		},

		removeToDo: (state, action) => {
			state.todos = state.todos.filter((todo) => todo.id !== action.payload);
		},
		markAsDone: (state, action) => {
			state.todos = state.todos.map((todo) =>
				todo.id === action.payload
					? { ...todo, completed: !todo.completed, running: false }
					: todo
			);
		},
		editTodo: (state, action) => {
			state.todos = state.todos.map((todo) =>
				todo.id === action.payload.id
					? { ...todo, task: action.payload.task }
					: todo
			);
		},
		makeDefault: (state, action) => {
			state.todos = state.todos.map((todo) =>
				todo.id === action.payload
					? { ...todo, running: false, completed: false }
					: todo
			);
		},
	},
});
export const {
	addToDo,
	markAsRunning,
	removeToDo,
	markAsDone,
	editTodo,
	makeDefault,
} = todoSlice.actions;
export default todoSlice.reducer;
