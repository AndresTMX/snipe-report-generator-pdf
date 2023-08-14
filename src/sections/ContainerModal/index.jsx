import '../../pages/home/home.css';

function ContainerModal({children}) {
    return ( 
        <div className="modal">
            {children}
        </div>
     );
}

export {ContainerModal};