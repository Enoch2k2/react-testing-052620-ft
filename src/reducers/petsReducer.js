export default (state=[], action) => {
    switch(action.type) {
        case "ADD_PETS":
            return action.pets;
        case "ADD_PET":
            return [...state, action.pet];
        default:
            return state;
    }
}