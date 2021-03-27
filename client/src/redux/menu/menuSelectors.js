import {createSelector} from "reselect"

export const selectMenu = (state) => state.menu


export const selectMenuSections = createSelector(
    [selectMenu], 
    (menu)=> menu.sections
)