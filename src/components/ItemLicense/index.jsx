import './ItemLicense.css';

function ItemLicense({license,manufacturer,category,expiration,notes}) {
    
    return ( 
        <>
        <section className='ItemLicense'>

            <div className="box-top">
                <span>{category}</span>
                <span>{manufacturer}</span>
            </div>

            <div className="box-middle">
                <h3>{license}</h3>
                <p>{notes}</p>
            </div>

            <div className="box-bottom">
                <span>{expiration? expiration: 'Fecha de expriración no registrada'}</span>
            </div>

        </section>
        </>  
     );
}

export {ItemLicense};