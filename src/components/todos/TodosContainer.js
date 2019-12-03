import React, { Component } from 'react';
import { connect } from 'react-redux'
import Todo from './Todo'

class TodosContainer extends Component {

  renderTodos = () => {
    console.log(this.props.todos.map(todo => todo.id))
    return this.props.todos.map(todo => <Todo key={todo.id} todo={todo} delete={this.props.delete} />)
  }

  render() {
    return(
      <div> 
        {this.renderTodos()}
      </div>
    );
  }
};

const mapStateToProps = state => {
  return {
    todos: state.todos
  }
}

const mapDispatchToProps = dispatch => {
  // send delete action to TodoConainer props
  return {
    delete: todoId => dispatch({
      type: 'DELETE_TODO',
      payload: todoId
    })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodosContainer);
