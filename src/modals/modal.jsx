import React from "react"
import ReactDom from 'react-dom'
import {ContainerModal} from '../sections/ContainerModal';

function Modal({children}) {
    return ReactDom.createPortal(
        <ContainerModal>
                {children}
        </ContainerModal>,
        document.getElementById('modal')
    );
}

export {Modal};
