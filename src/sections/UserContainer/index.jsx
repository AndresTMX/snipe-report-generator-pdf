import './userContainer.css';

function UserContainer({ children, prevPage, nextPage }) {
    return (
        <>
            <section className='container-user hide-scrollbar'>
                <div className="container-buttons">
                    <button onClick={() => prevPage()}>Anterior</button>
                    <button onClick={() => nextPage()}>Siguiente</button>
                </div>
                <div className='section_user'>
                {children}
                </div>
            </section>
        </>
    );
}

export { UserContainer };