
const StatesModals = {
    modalComent: false,
    modalEditInfo: false,
    modalDocStore: false,
    modalNotification: false,
    modalConfig: false,
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
    setModalComent: 'SET_MODAL_COMENT',
    setModalEditInfo: 'SET_MODAL_EDIT_INFO',
    setModalDocStore: 'SET_MODAL_DOC_STORE',
    setModalNotification: 'SET_MODAL_NOTIFICATION',
    setModalConfig: 'SET_MODAL_CONFIG',
}

//Use reducer con estrutura de objetos 
const reducerObject = (state, payload) => ({
 
    [actionTypes.setModalComent]:{
        ...state,
        modalComent: payload
    },
    [actionTypes.setModalEditInfo]:{
        ...state,
        modalEditInfo: payload
    },
    [actionTypes.setModalDocStore]:{
        ...state,
        modalDocStore: payload
    },
    [actionTypes.setModalNotification]:{
        ...state,
        modalNotification: payload
    },
    [actionTypes.setModalConfig]:{
        ...state,
        modalConfig:payload
    }

});

export { StatesModals, reducer, actionTypes }