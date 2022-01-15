export const submitClient = ({ name, age, email }) => ({
  type: "SUBMIT_CLIENT",
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