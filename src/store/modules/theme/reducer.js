const ThemeReducer = (state = {
    back: "#f7f7f7",
    text: "#232323",
    buttons: "#3281a8"
  }, action) => {
    switch (action.type) {
        case "dark":
            return state = action.color;
        case "white":
            return state = action.color
        default:
            return state
    }
}

export default ThemeReducer