import { useEffect, useState } from 'react';
import {MdError} from 'react-icons/md'
import './notDocState.css'

function NotResultUsers({error, pageRender, loading}) {

  const [render, setRender] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setRender(true)
    }, 500)
  }, [pageRender])

    return (
      <>
        {pageRender.length === 0 && render && (

          <div className="no-document-state">

            <span>
              <MdError />
            </span>

            {error && 
              <h1>{error.message}</h1>
            }

            {!error && !loading && (<h1>Sin resultados</h1>)}

          </div>
        )}
      </>
    );
}

export {NotResultUsers}
