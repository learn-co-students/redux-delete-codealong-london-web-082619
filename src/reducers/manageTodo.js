// A Todo should have an id the moment it gets created.
import uuid from 'uuid'

export default function manageTodo(state = {
  todos: [],
}, action) {
  console.log(action)
  switch (action.type) {
    case 'ADD_TODO':
      /** Using uuid() will generate a long random string each time a todo is created. 
       * Now, instead of just storing an array of strings in our store, 
       * we'll be storing an array of objects. */
      const todo = { id: uuid(), text: action.payload.text }
      return { todos: state.todos.concat(todo) }

    case 'DELETE_TODO':
      return { todos: state.todos.filter(todo => todo.id !== action.payload)}

    default:
      return state;
  }
}