import produce, { setAutoFreeze } from "immer";
import { Actions } from "./actions";

setAutoFreeze(false);

const defaultActiveTab = 0;

export const tabReducer = (state = defaultActiveTab, action) => {
  if (action.type === Actions.SWITCH_TAB) {
    return action.index;
  } else {
    return state;
  }
};

const defaultTodos = [
  { id: 1, title: "Create a test plan for the mobile and web applications." },
  { id: 2, title: "Perform manual test execution on both platforms" },
  {
    id: 3,
    title:
      "Document any software issues with clear and detailed steps to duplicate the defect",
    checked: true
  }
];

export const todosReducer = produce((draft, action) => {
  switch (action.type) {
    case Actions.ADD_TODO:
      draft.push({ ...action.item, id: Date.now() });
      return;
    case Actions.UPDATE_TODO:
      {
        const index = draft.findIndex(item => item.id === action.item.id);
        if (index >= 0) {
          Object.assign(draft[index], action.item);
        }
      }
      return;
    case Actions.REMOVE_TODO:
      {
        const index = draft.findIndex(item => item.id === action.item.id);
        if (index >= 0) {
          draft.splice(index, 1);
        }
      }
      return;
    case Actions.CLEAR_ALL_ITEMS:
      return [];
    default:
      return;
  }
}, defaultTodos);

const defaultProfile = {
  name: "Dummy",
  about: "This is a dummy account",
  location: "I live in your browser"
};

export const profileReducer = produce((draft, action) => {
  switch (action.type) {
    case Actions.UPDATE_PROFILE:
      Object.assign(draft, action.profile);
      return;
    case Actions.CLEAR_ALL_ITEMS:
      Object.assign(draft, defaultProfile);
      return;
    default:
      return;
  }
}, defaultProfile);
