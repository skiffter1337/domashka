export type InitStateType = {
    themeId: string
}

const initState = {
    themeId: "1"
}


export const themeReducer = (state = initState, action: changeThemeIdType): InitStateType => { // fix any
    switch (action.type) {
        case 'SET_THEME_ID': {
            return {...state, themeId: action.id}
        }

        default: return state

    }
}
type changeThemeIdType = {
    type: 'SET_THEME_ID'
    id: string
}
export const changeThemeId = (id: string): changeThemeIdType => {
    return {
        type: 'SET_THEME_ID',
        id
    } as const
}
// fix any
