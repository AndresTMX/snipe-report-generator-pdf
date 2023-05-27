import './searcher.css';

function InputSearch({state, setState, resultSearch}) {

    const result = resultSearch? resultSearch: 0;

    
    const onSearchValueChangue = (event) => {
        setState(event.target.value.toLowerCase())
      };

    return ( 
        <div className='container-searcher'>
            <input className='searcher' type="text" value={state} onChange={onSearchValueChangue} placeholder={'Buscar usuario'} />
            <span className='results-search'>Resultados : {result}</span>
        </div>
     );
}

export {InputSearch};