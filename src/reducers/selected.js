const selectedReducer = (state = [], action) =>{
    switch(action.type){
        case "ADDSELECTED":
            var set1 = new Set(state)
            set1.add(action.payload)
            return [...set1];
        case "REMSELECTED":
            var set2 = new Set(state)
            set2.delete(action.payload)
            return [...set2];
        default:
            return state;
    }
}

export default selectedReducer;