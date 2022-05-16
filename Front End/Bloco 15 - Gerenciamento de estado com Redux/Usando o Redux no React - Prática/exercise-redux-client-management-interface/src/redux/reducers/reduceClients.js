const reduceClients = (state = [], action) => {
  switch (action.type) {
    case "ADD_CLIENT":
      return [...state, action.payload];
    case "REMOVE_CLIENT":
      return state.filter((client) => client.email !== action.payload.email);
    default:
      return state;
  }
};

export default reduceClients;
