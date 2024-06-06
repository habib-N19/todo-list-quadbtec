export type TTodo = {
	id: string;
	task: string;
	running: boolean;
	completed: boolean;
};
export type TTodoState = {
	todos: TTodo[];
};
export type TTaskCardProps = {
	task: TTodo;
	handleMarkRunning: (id: string) => void;
	handleEdit: (id: string) => void;
	handleDelete: (id: string) => void;
	handleMarkAsDone: (id: string) => void;
};
export type TTasksComponentProps = {
	tasks: TTodo[];
	handleMarkRunning: (id: string) => void;
	handleEdit: (id: string) => void;
	handleDelete: (id: string) => void;
	handleMarkAsDone: (id: string) => void;
};
