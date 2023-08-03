
const initialState = {
    form: false,
    document:false,
    listTags:[],
    notification:false,
    maintances:[],
    user:'',
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
    setForm: 'SET_FORM',
    setDocument:'SET_DOCUMENT',
    addTag: 'ADD_TAG',
    setNotification:'SET_NOTIFICATION',
    setMaintances:'SET_MAINTANCES',
    setUser:'SET_USER'
  
}

//Use reducer con estrutura de objetos 
const reducerObject = (state, payload) => ({
 
    [actionTypes.setForm]:{
        ...state,
        form: payload
    },
    [actionTypes.setDocument]:{
        ...state,
        document:payload
    },
    [actionTypes.addTag]:{
        ...state,
        listTags:payload
    },
    [actionTypes.setNotification]:{
        ...state,
        notification:payload
    },
    [actionTypes.setMaintances]:{
        ...state,
        maintances:payload
    },
    [actionTypes.setUser]:{
        ...state,
        user:payload
    }

});

export { initialState , reducer, actionTypes }