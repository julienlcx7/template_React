const initialState = {
    value: "je suis redux",
};

export default function userReducer(state = initialState, action) {
    switch (action.type) {
        default:
            return state; 
    }
}
