import {CREATE, UPDATE, DELETE} from '../type';

export const newTask = data => {
    return {
        type: CREATE,
        taskAdd: data,
    };
};

export const updateTask = data => {
    return {
        type: UPDATE,
        taskUpdate: data,
    };
};

export const deleteTask = id => {
    return {
        type: DELETE,
        taskDelete: id,
    };
};