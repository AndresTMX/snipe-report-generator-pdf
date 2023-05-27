import comind from '../../public/statics/comind.png';
import toh from '../../public/statics/TOH-logo.png';
import staff from '../../public/statics/staff-logo.png';

function useImagePDF(company) {

    let image;

    if(company === 'CONEXIONES Y MANGUERAS INDUSTRIALES DE MINATITLAN' || company === 'INSTRUMENTACION Y PRECISION'){
        image = comind;
    }

    if(company === 'STAFF RECURSOS EN MOVIMIENTO'){
        image = staff;
    }

    if(company === 'TOH INDUSTRIAL'){
        image = toh;
    }


    return {image};
}

export {useImagePDF};