import "./DocStoreTable.css";
import { DocStoreItemTable } from "../DocStoreItemTable";

function DocStoreTable({ arrayRender, typeTable, state }) {

  const { initialStore } = state? state: {};
  const { storage } = initialStore? initialStore: {};
  const validate = arrayRender? arrayRender.length: 0;
  const renderAssets = validate > 0 ? true : false;

  //funcion que rebice como parametro el tipo de tabla y el array a renderizar
  //segun los parametros selecciona que props mandar a render
  function renderItems (typeTable, arrayRender) {
    if(typeTable === 'Activos')


    return(
      arrayRender.map((asset) => (
      <DocStoreItemTable
        typeTable={typeTable}
        key={asset.asset_tag}
        tag={asset.asset_tag}
        name={asset.name}
        state={state}
      />
    )))
    else{
      return(
        arrayRender.map((accessorie) => (
      <DocStoreItemTable
        typeTable={typeTable}
        key={accessorie.index}
        index={accessorie.index}
        id={accessorie.id}
        name={accessorie.name}
        state={state}
      />
    )))}
  }

  return (
    <>
     {
      renderAssets?
      <div className="DocStoreTable">
        <h3>{typeTable} agregados</h3>
        <table>
          <tbody>
            <tr>
              <th>{typeTable}</th>
              <th>OFCMI</th>
              <th></th>
            </tr>

            {
              renderItems(typeTable, arrayRender)
              }

          </tbody>
        </table>
      </div>
      :
      <>
      <h3 className="Not-DocStoreTable">Sin {typeTable} agregados</h3>
      </> 
     }
    </>
  );
}

export { DocStoreTable };