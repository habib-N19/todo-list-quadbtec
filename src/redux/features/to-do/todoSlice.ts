import { createSlice } from "@reduxjs/toolkit";
export type TTodo = {
	id: string;
	task: string;
	running: boolean;
	completed: boolean;
};
type TTodoState = {
	todos: TTodo[];
};
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
				todo.id === action.payload ? { ...todo, running: true } : todo
			);
		},

		removeToDo: (state, action) => {
			state.todos = state.todos.filter((todo) => todo.id !== action.payload);
		},
		markAsDone: (state, action) => {
			state.todos = state.todos.map((todo) =>
				todo.id === action.payload ? { ...todo, completed: true } : todo
			);
		},
		editTodo: (state, action) => {
			state.todos = state.todos.map((todo) =>
				todo.id === action.payload.id
					? { ...todo, task: action.payload.task }
					: todo
			);
		},
	},
});
export const { addToDo, markAsRunning, removeToDo, markAsDone, editTodo } =
	todoSlice.actions;
export default todoSlice.reducer;
