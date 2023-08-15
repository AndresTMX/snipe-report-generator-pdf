
const initialState = {
    formSendMaintances: false,
    formGenerateDocument:false,
    notification:false,
    maintances:[],
};

//Use reducer que valida los objetos
 const reducer = (state, action) => {
    if (reducerObject(state)[action.type]) {
        return reducerObject(state, action.payload)[action.type];
    } else {
        return state;
    }
}

const actionTypes = {
    setformSendMaintances: 'SET_FORM_MAINTANCES',
    setformGenerateDocument:'SET_FORM_GENERATE_DOCUMENT',
    setNotification:'SET_NOTIFICATION',
    setMaintances:'SET_MAINTANCES',
}

//Use reducer con estrutura de objetos 
const reducerObject = (state, payload) => ({
 
    [actionTypes.setformSendMaintances]:{
        ...state,
        formSendMaintances: payload
    },
    [actionTypes.setformGenerateDocument]:{
        ...state,
        formGenerateDocument:payload
    },
    [actionTypes.setNotification]:{
        ...state,
        notification:payload
    },
    [actionTypes.setMaintances]:{
        ...state,
        maintances:payload
    },
});

export { initialState , reducer, actionTypes }