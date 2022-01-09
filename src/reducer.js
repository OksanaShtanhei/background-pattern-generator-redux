export const initial = [5, 5, 5, 5]

const reducer = (state = initial, action) => {
    switch(action.type){
        case 'four':
            return state = [5,5,5,5]
        case 'three':
            return state = [5,5,5,50]
        case 'two':
            return state = [5,50,5,50]
        case 'one':
            return state = [50,50,50,5]
        default:
            return state
    }
}
export default reducer