import {MdError} from 'react-icons/md'
import './notDocState.css'
function NotResultUsers({error, pageRender}) {
    return ( 
        <div className='no-document-state'>
            <span>
                <MdError/>
            </span>
            {error && (<h1>{error.message}</h1>)}

            {!pageRender.length && !error && (<h1>Sin resultados</h1>)}
        </div>
     );
}

export {NotResultUsers};