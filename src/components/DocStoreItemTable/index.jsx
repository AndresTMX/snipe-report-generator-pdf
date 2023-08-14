import { useItems } from '../../Hooks/useItems';
import IconButton from '@mui/material/IconButton';
import { FaTrashAlt } from 'react-icons/fa';


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
            <IconButton sx={{'&:hover':{
              color:'red',
              transition:'all',
              transitionDuration:'0.3s'
            }}} title="Eliminar de la lista" onClick={() => deleteItem(tag)}>
              <FaTrashAlt/>
            </IconButton>
          </td>
        </tr>
      );
    } else {
      return (
        <tr>
          <td>{name}</td>
          <td>{id}</td>
          <td>
            <IconButton sx={{'&:hover':{
              color:'red',
              transition:'all',
              transitionDuration:'0.3s'
            }}} title="Eliminar de la lista" onClick={() => deleteAccessories(index)}>
              <FaTrashAlt/>
            </IconButton>
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
