
const initialState = {
    form: false,
    listTags:[],
    dateInit:'',
    dateEnd: '',
    title:'',
    notification:false,
    maintances:[]
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
    addTag: 'ADD_TAG',
    setNotification:'SET_NOTIFICATION',
    setMaintances:'SET_MAINTANCES',
  
}

//Use reducer con estrutura de objetos 
const reducerObject = (state, payload) => ({
 
    [actionTypes.setForm]:{
        ...state,
        form: payload
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
    }

});

export { initialState , reducer, actionTypes }