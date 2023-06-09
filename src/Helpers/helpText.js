
export default function handleTextFirmas(typeDocument){

    let emisor
   

    if(typeDocument === 'CR'){
        emisor = 'NOMBRE Y FIRMA DE LIDER DE TI'
    }else{
        emisor = 'NOMBRE Y FIRMA DEL PERSONAL DE TI'
    }

    return {emisor}
}