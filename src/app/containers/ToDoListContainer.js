import { connect } from "react-redux";
import ToDoList from "../components/ToDoList";
import { addTodo, updateTodo, removeTodo } from "../../store/actions";

const mapStateToProps = (state, ownProps) => {
  return {
    items: state.todos
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addItem: item => {
      dispatch(addTodo(item));
    },
    updateItem: item => {
      dispatch(updateTodo(item));
    },
    removeItem: item => {
      dispatch(removeTodo(item));
    }
  };
};

const TodoListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ToDoList);

export default TodoListContainer;
