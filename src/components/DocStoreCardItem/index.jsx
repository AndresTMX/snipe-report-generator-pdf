import { actionTypes } from "../../Context/DocReducer";
import { useItems } from '../../Hooks/useItems';

function DocStoreCardItem({ tag, name, idUser, state }) {

  const { initialStore, dataDocument } = state
  const { storage } = initialStore;

  const {assets, count, user, company, city} = storage;

  const { actions } = useItems({idUser, user, company, city});

  const {deleteItem} = actions;

  const deleteItemDocument = (tag) => {

    const {assets} = storage;
    
    const key = assets.findIndex((asset) => asset.asset_tag === tag)
    
    const newState = assets.splice(key, 1)
    
    if(newState){
        deleteItem(tag, idUser)
      }else{
        aler('alert en hanldeUpdate en DocStoreCardItem')
      }
  };

  const newTag = tag.slice(6,9)

  return (
    <>
      <tr>
        <td>{name}</td>
        <td>{newTag}</td>
        <td>
          <button title="Eliminar de la lista" onClick={() => deleteItemDocument(tag)}>x</button>
        </td>
      </tr>
    </>
  );
}

export { DocStoreCardItem };
