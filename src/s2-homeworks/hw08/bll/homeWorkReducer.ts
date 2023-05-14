import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: Array<UserType>, action: ActionType): Array<UserType> => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            let stateCopy = [...state];
            if (action.payload === 'up') {
                stateCopy.sort(function (a, b) {
                    if (a.name.toLowerCase() > b.name.toLowerCase()) {
                        return -1
                    }
                    return 0
                })
            }
            if (action.payload === 'down') {
                stateCopy.sort(function (a, b) {
                    if (a.name.toLowerCase() < b.name.toLowerCase()) {
                        return 1
                    }
                    return 0
                })
            }
            return stateCopy
             // need to fix
        }
        case 'check': {

            return state.filter(user => user.age > 18) // need to fix
        }
        default:
            return state
    }
}
