const initState = false


export const loadingReducer = (state: boolean  = initState, action: LoadingActionType): boolean  => { // fix any
    switch (action.type) {
        case "CHANGE_LOADING": {
            return !action.isLoading
        }

        default:
            return state
    }
}

type LoadingActionType = {
    type: 'CHANGE_LOADING'
    isLoading: boolean
}

export const loadingAC = (isLoading: boolean): LoadingActionType => ({
    type: 'CHANGE_LOADING',
    isLoading,
})
