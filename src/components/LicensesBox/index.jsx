//styles
import './LicensesBox.css';
//Hook
import {useGetLicenses} from '../../Hooks/useGetLicenses';
//Componente
import {ViewItems} from '../ViewItems/';
import { ThreeDots } from '../Loading/';
import {ItemLicense} from '../ItemLicense/';

function LicensesBox({idUser, closeBox}) {

    const {dataLicenses, loading} = useGetLicenses(idUser);

    function MapData(array){
        if(array){
            return array.map((data) => ({
            id:data.id,
            license: data.name,
            manufacturer:data.manufacturer?.name,
            category: data.category?.name,
            expiration: data.expiration_date,
            notes: data.notes
        }))
        }else{
            return false
        }
    }

    const renderMap = MapData(dataLicenses);

    return (
      <>
        <ViewItems>
          {loading && (
            <div className="container-loading">
              <ThreeDots />
            </div>
          )}

          {!loading && !renderMap.length && (
            <section className="container-license">
              <div className="container-button-close">
              <h3>Sin licencias asignadas</h3>
                <button className="button-close" onClick={closeBox}>
                  x
                </button>
              </div>
            </section>
          )}

          {!loading && renderMap.length && (
            <section className="container-license">
              <div className="container-button-close">
              <h3>Licencias Asignadas</h3>
                <button className="button-close" onClick={closeBox}>
                  x
                </button>
              </div>

              {renderMap.map((license) => (
                <ItemLicense
                  key={license.id}
                  license={license.license}
                  manufacturer={license.manufacturer}
                  category={license.category}
                  expiration={license.expiration}
                  notes={license.notes}
                />
              ))}
            </section>
          )}
        </ViewItems>
      </>
    );
}

export {LicensesBox};