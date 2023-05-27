import React from "react"
import ReactDom from 'react-dom'
import {ContainerModal} from '../sections/ContainerModal';

function Notification({children}) {
    return ReactDom.createPortal(
        <ContainerModal>
                {children}
        </ContainerModal>,
        document.getElementById('notification')
    );
}

export {Notification};
