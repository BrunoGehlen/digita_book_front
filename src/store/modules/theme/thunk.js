import {DarkTheme, WhiteTheme} from "./actions"

export const addToLocalDark = (theme) => {
    return (dispatch, getState) => {
        let MyTheme = JSON.parse(localStorage.getItem("mytheme")) || ''
        MyTheme = theme
        localStorage.setItem("mytheme", JSON.stringify(MyTheme))
        dispatch(DarkTheme(theme))
    }
}

export const addToLocalWhite = (theme) => {
    return (dispatch, getState) => {
        let MyTheme = JSON.parse(localStorage.getItem("mytheme")) || ''
        MyTheme = theme
        localStorage.setItem("mytheme", JSON.stringify(MyTheme))
        dispatch(WhiteTheme(theme))
    }
}