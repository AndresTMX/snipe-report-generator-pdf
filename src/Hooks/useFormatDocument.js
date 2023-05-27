
function useFormatDocument(typeDocument) {

    let typeFormat

    if(typeDocument === 'MP' || typeDocument === 'MC'){
        typeFormat = 'F-TI-3'
    }

    if(typeDocument === 'VB'){
        typeFormat = 'F-TI-1'
    }

    return {typeFormat};
}

export {useFormatDocument};