import { useState } from "react";

function UseModal() {

    const [modal, setModal] = useState(false); //modalAssetsBox
    const [modal2, setModal2] = useState(false); //modalItems
    const [modal3, setModal3] = useState(false); //modalMaintances

    return {modal, setModal, modal2, setModal2, modal3, setModal3};
}

export {UseModal};