export const Actions = {
  SWITCH_TAB: "SWITCH_TAB",
  ADD_TODO: "ADD_TODO",
  UPDATE_TODO: "UPDATE_TODO",
  REMOVE_TODO: "REMOVE_TODO",
  UPDATE_PROFILE: "UPDATE_PROFILE",
  CLEAR_ALL_ITEMS: "CLEAR_ALL_ITEMS"
};

export const switchTab = index => ({
  type: Actions.SWITCH_TAB,
  index
});

export const addTodo = item => ({
  type: Actions.ADD_TODO,
  item
});

export const updateTodo = item => ({
  type: Actions.UPDATE_TODO,
  item
});

export const removeTodo = item => ({
  type: Actions.REMOVE_TODO,
  item
});

export const updateProfile = profile => ({
  type: Actions.UPDATE_PROFILE,
  profile
});

export const clearAllItems = () => ({
  type: Actions.CLEAR_ALL_ITEMS
});
