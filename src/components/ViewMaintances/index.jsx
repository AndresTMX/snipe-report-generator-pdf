import './viewMaintances.css';

function ViewMaintances({modal, setModal, dataMaintances}) {

    const dataRender = dataMaintances || [];

    const CloseModal = () => {
      setModal(!modal)
    }

    return ( 
        <>
        <div className='view-maintances-box'>

        <div className="container-button-maintance">
          <span className="title">Mantenimientos realizados</span>
          <button className="button-close" onClick={() => CloseModal()}>
            x
          </button>
        </div>

        {
            dataRender.length > 0 && (
                <table>
              <tbody className="table-header-maintances">
                <tr>
                  <th>TITLE</th>
                  <th>REALIZO</th>
                  <th>NOTAS</th>
                  <th>INICIADO</th>
                  <th>FINALIZADO</th>
                  <th>ACCION</th>
                </tr>

                {dataRender.map((maintance) => (
                  <tr className="table-body-maintances" key={maintance.id}>
                    <td>{maintance.title}</td>
                    <td>{maintance?.user_id?.name}</td>
                    <td>{maintance?.notes}</td>
                    <td className='fecha'>{maintance?.completion_date?.date}</td>
                    <td className='fecha'>{maintance?.completion_date?.formatted}</td>
                    <td className="td-actions">
                      <div>
                        <button className="button-delete">X</button>
                        <button className="button-add">Ad</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            )
        }

        {
            dataRender.length === 0 && (
                <p className='no-maintances'>Aun no hay mantenimientos realizados a este equipo</p>
            )
        }
        </div>
        </>
     );
}

export {ViewMaintances};