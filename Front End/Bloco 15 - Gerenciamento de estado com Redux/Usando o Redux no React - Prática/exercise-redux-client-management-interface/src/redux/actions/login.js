const login = (email) => ({
  type: 'LOGIN_SUCCESS',
  payload: {
    email
  }
})

export const logout = () => ({
  type: 'LOGOUT'
})

export default login;