//Record selected id
export default (state = null, action) => {
    console.log("SelectionReducer ations: "+action);
    switch (action.type) {
        case 'select_library':
            return action.payload;
        default:
            return state;
    }
};
