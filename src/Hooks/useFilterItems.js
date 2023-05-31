//este hook filtra los activos del usuario para obtener solo los que 
//tienen la categoria de GABINETE o LAPTOP y extrae sus numeros de serie
//para despues usar esos numeros de serie para buscar los componentes relacionados

function useFilterItems(arrayItems) {

    let result
    let ArrayResult

    if(arrayItems){
     result = arrayItems.filter(item => item.category.name === "GABINETE" || item.category.name === "LAPTOP" );
     ArrayResult = result.map((item) => item.serial);

    }else{
      result = [];
      ArrayResult = [];
    }

    return {ArrayResult}
}

export {useFilterItems};