export const addTodo = text => ({ type: 'ADD_TODO', payload: { text } });
export const removeTodo = idTodo => ({ type: 'REMOVE_TODO', payload: { idTodo } });
