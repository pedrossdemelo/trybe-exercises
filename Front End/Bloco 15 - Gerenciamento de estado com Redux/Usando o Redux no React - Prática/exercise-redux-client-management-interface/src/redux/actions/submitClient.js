export const submitClient = ({ name, age, email }) => ({
  type: "ADD_CLIENT",
  payload: {
    name,
    age,
    email,
  },
});

export const removeClient = ({email}) => ({
  type: "REMOVE_CLIENT",
  payload: {
    email
  }
});