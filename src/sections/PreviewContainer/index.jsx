import './PreviewContainer.css';

function PreviewContainer({children}) {

    return ( 
        <section className='preview-container'>
            {children}
        </section>
     );
}

export {PreviewContainer};