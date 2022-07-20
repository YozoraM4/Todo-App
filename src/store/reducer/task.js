import {CREATE, UPDATE, DELETE} from '../type';

const initialState = {
    todo: [],
};


export default (state = initialState, action) => {
    switch (action.type){
        case CREATE:
            let createTask;
            if (state.todo.length > 0) {
                const newTodo = {
                    id: state.todo.length + 1,
                    format: action.taskAdd.format,
                    task: action.taskAdd.task,
                    memo: action.taskAdd.memo,
                    date: action.taskAdd.date,
                    min: action.taskAdd.min
                }
                createTask = [...state.todo, newTodo];
            } else if (action.taskAdd.length > 0) {
                createTask = action.taskAdd;
            } else {
                createTask = [action.taskAdd];
            }
            return {
                ...state, todo: createTask.sort((a,b)=>a.date -b.date),
            };

        case DELETE: 
            return {
                ...state,
                todo: state.todo.filter(item => item.id !== action.taskDelete),
              };
        
        default:
            return {todo: state.todo};
    }
};