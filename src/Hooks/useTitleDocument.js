
function useTitleDocument(typeDocument) {

    let title

    if(typeDocument === 'MP'){
        title = 'ACTA DE MANTENIMIENTO PREVENTIVO'
    }
    
    if(typeDocument === 'MC'){
        title = 'ACTA DE MANTENIMIENTO CORRECTIVO'
    }

    if(typeDocument === 'CL'){
        title = 'CHECKLIST DE EQUIPOS INFORMATICOS'
    }

    if(typeDocument === 'VB'){
        title = 'VALE DE BAJA DE EQUIPOS INFORMATICOS'
    }

    if(typeDocument === 'CR'){
        title = 'CARTA RESPONSIVA DE SISTEMAS'
    }

    return {title};
}

export {useTitleDocument};