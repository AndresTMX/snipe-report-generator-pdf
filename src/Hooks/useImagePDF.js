import comind from '../../public/statics/comind.png';
import toh from '../../public/statics/TOH-logo.png';
import staff from '../../public/statics/staff-logo.png';

function useImagePDF(company) {

    let image;

    if(company === 'Conexiones Y Mangueras Industriales De Minatitlan' || company === 'Instrumentación Y Precisión'){
        image = comind;
    }

    if(company === 'Staff Recursos En Movimiento'){
        image = staff;
    }

    if(company === 'Toh Industrial'){
        image = toh;
    }


    return {image};
}

export {useImagePDF};