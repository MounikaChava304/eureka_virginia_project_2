import { countReducer } from "../reducers/counter.reducer";
import { employeesReducer } from "../reducers/employee.reducer";
import { todoReducer } from "../reducers/todo.reducer";

export const myStore = {
    countReducer: countReducer,
    todoReducer,
    employees : employeesReducer
}