import './ActaMantenimiento.css';
import { DataAssets } from '../DataAssets';

function ActaMantenimiento({stateCard}) {

    const day = stateCard.date.split('/')[0];
    const mounth = stateCard.date.split('/')[1];
    const annie = stateCard.date.split('/')[2];

    const departamentName = stateCard.department;
    const companyName = stateCard.company;

    const logo = companyName === 'Conexiones y Mangueras Industriales'? 'https://comimsa.net/wp-content/uploads/2022/10/imago-ICO-COMIND.ico' : 'https://slokmexico.com/wp-content/uploads/2019/06/logo-slokmexico.png';

    return ( 
        <>
        <section className="acta">

            <div className='acta-cabecera'>

                <div className='cabecera-logo-container'>
                    <picture>
                        <img src={logo} alt={companyName}/>
                    </picture>
                </div>

                <div className='acta-title'>
                    <span>ACTA DE MANTENIMIENTO A EQUIPO DE COMPUTO</span>
                </div>

                <div className='acta-date'>
                    <span>Version: 00</span>
                    <span>Fecha: {stateCard.date}</span>
                    <span>Codigo: F-TI-3</span>
                </div>
            </div>

            <div className='acta-data'>

                <div className='data-user'>
                    <div>
                        <span>Nombre de usuario</span>
                        <span>Departamento</span>
                    </div>

                    <div>
                    <span>{stateCard.name}</span>
                    <span>{departamentName}</span>
                    </div>
                    
                </div>

                <div className='data-date'>
                    <div>
                        <span>D</span>
                        <span>M</span>
                        <span>A</span>
                    </div>
                    <div>
                        <span>{day}</span>
                        <span>{mounth}</span>
                        <span>{annie}</span>
                    </div>
                </div>
            </div>

            <div className='acta-content'>
                <DataAssets/>
            </div>

            <div className='acta-text'>
                <p>El referido equipo de cómputo se me entrega en condición de trabajo, el mismo que está bajo mi responsabilidad y cuidado.</p>

                <p>Me comprometo a no instalar ningún software que no esté autorizado por el área de sistemas y reportar cualquier falla que se encuentre a, a fin de que esta sea reparada. "Toda la información que los equipos puedan contener, almacenar o procesar es considerada confidencial, para lo cual comprendo la importancia de no dar a conocer las contraseñas que se me han entregado para impedir el acceso no autorizado al mismo".</p>

                <p> Asimismo, en caso de tener el equipo un daño o perjuicio por mal uso u operación, este será bajo mi responsabilidad y costo, para lo cual autorizo a mi empleador Conexiones y Mangueras Industriales de Minatitlán, SA de CV realizar el descuento respectivo por el costo de la reparación.</p>
            </div>
            
            <div className='acta-firma'>

                <div>
                    <span>Nombre y Firma del usuario</span>
                </div>

                <div>
                    <span>Nombre y Firma del personal de TI</span>
                </div>
            </div>

        </section>
        </>
     );
}

export {ActaMantenimiento};