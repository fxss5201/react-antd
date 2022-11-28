const locale = (state = 'zhCN', action) => {
  switch (action.type) {
    case 'CHANGE_LOCALE':
      return action.value
    default:
      return state
  }
}

export default locale;
