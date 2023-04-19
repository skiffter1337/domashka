export type InitStateType = {
    themeId: number
}

const initState = {
    themeId: 1
}


export const themeReducer = (state: InitStateType = initState, action: changeThemeIdType): InitStateType => { // fix any
    switch (action.type) {
        case 'SET_THEME_ID': {
            return {...state, themeId: action.id}
        }

        default: return state

    }
}


type changeThemeIdType = {
    type: 'SET_THEME_ID'
    id: number
}
export const changeThemeId = (id: number): changeThemeIdType => {
    return {
        type: 'SET_THEME_ID',
        id
    } as const
}
// fix any
