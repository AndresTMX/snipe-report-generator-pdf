import "./DocStoreTable.css";
import { DocStoreCardItem } from "../DocStoreCardItem";


function DocStoreTable({ arrayRender, typeTable }) {

  const validate = arrayRender? arrayRender.length: 0;

  const renderAssets = validate > 0 ? true : false;

  return (
    <>
     {
      renderAssets?
      <div className="doc-box-actions">
        <h3>{typeTable} agregados</h3>
        <table>
          <tbody>
            <tr>
              <th>ACTIVO</th>
              <th>OFCMI</th>
              <th></th>
            </tr>

            {
              arrayRender.map((asset) => (
                <DocStoreCardItem
                  key={asset.asset_tag}
                  name={asset.name}
                  tag={asset.asset_tag}
                  idUser={storage.idUser}
                  state={state}
                />
              ))}

          </tbody>
        </table>
      </div>
      :
      <>
      <h3>Sin {typeTable} agregados</h3>
      </> 
     }
    </>
  );
}

export { DocStoreTable };