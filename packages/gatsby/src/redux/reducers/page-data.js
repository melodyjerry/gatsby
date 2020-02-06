module.exports = (state = new Map(), action) => {
  switch (action.type) {
    case `REMOVE_PAGE_DATA`:
      state.delete(action.payload.id)
      return state

    case `SET_PAGE_DATA`: {
      return state.set(action.payload.id, action.payload.result)
    }

    default:
      return state
  }
}
