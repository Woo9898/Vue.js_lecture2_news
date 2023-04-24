export default {
  
  setUser(state, userData) {
    state.user = userData;
  },
  setAskItem(state, askItemData) {
    state.askItem = askItemData;
  },
  setListItem(state, ListData){
    state.List = ListData;
  }
};