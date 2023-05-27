import './visualizer.css'

function ViewItems({children}) {
    return ( 
        <div className="visualizer">
            {children}
        </div>
     );
}

export {ViewItems};