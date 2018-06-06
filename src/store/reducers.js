import produce, { setAutoFreeze } from "immer";
import { Actions } from "./actions";

setAutoFreeze(false);

const defaultState = {
  activeTab: 0,
  todos: [
    { id: 1, title: "Create a test plan for the mobile and web applications." },
    { id: 2, title: "Perform manual test execution on both platforms" },
    {
      id: 3,
      title:
        "Document any software issues with clear and detailed steps to duplicate the defect",
      checked: true
    }
  ],
  profile: {
    name: "Dummy",
    about: "This is a dummy account",
    location: "I live in your browser"
  }
};

const reducer = produce((draft, action) => {
  switch (action.type) {
    case Actions.SWITCH_TAB:
      draft.activeTab = action.index;
      return;
    case Actions.ADD_TODO:
      draft.todos.push({ ...action.item, id: Date.now() });
      return;
    case Actions.UPDATE_TODO:
      {
        const index = draft.todos.findIndex(item => item.id === action.item.id);
        if (index >= 0) {
          Object.assign(draft.todos[index], action.item);
        }
      }
      return;
    case Actions.REMOVE_TODO:
      {
        const index = draft.todos.findIndex(item => item.id === action.item.id);
        if (index >= 0) {
          draft.todos.splice(index, 1);
        }
      }
      return;
    case Actions.UPDATE_PROFILE:
      Object.assign(draft.profile, action.profile);
      return;
    case Actions.CLEAR_ALL_ITEMS:
      draft.todos = [];
      draft.profile = defaultState.profile;
      return;
    default:
      return;
  }
}, defaultState);

export default reducer;
