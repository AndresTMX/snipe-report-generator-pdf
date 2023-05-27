
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