import { useItems } from '../../Hooks/useItems';

function DocStoreItemTable({ typeTable, tag, id, name, index, state }) {

  const { initialStore } = state
  const { storage } = initialStore;

  const {user, company, city, idUser} = storage;

  const { actions } = useItems({idUser, user, company, city});

  const {deleteItem, deleteAccessories} = actions;

 let newTag

  function renderTr(typeTable){
    if (typeTable === 'Activos') {
      newTag = tag.slice(6,10);
      return (
        <tr>
          <td>{name}</td>
          <td>{newTag}</td>
          <td>
            <button title="Eliminar de la lista" onClick={() => deleteItem(tag)}>x</button>
          </td>
        </tr>
      );
    } else {
      return (
        <tr>
          <td>{name}</td>
          <td>{id}</td>
          <td>
            <button title="Eliminar de la lista" onClick={() => deleteAccessories(index)}>x</button>
          </td>
        </tr>
      );
    }
  }

  return (
    <>
      {
        renderTr(typeTable)
      }
    </>
  );
}

export { DocStoreItemTable };
