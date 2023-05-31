import {MdError} from 'react-icons/md'
import './notDocState.css'
function NotResultUsers() {
    return ( 
        <div className='no-document-state'>
            <span>
                <MdError/>
            </span>
            <h1>API not response</h1>
        </div>
     );
}

export {NotResultUsers};