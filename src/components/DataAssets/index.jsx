import './DataAssets.css';

function DataAssets() {
  return (
    <>
      <section className='section-table'>

        <span className='section-title'>MANTENIMIENTO PREVENTIVO</span>

        <table>

        <thead>

          <tr>
            <th>Id Equipo</th>
            <th>Descripcion de Equipo</th>
            <th>Numero de Serie</th>
            <th>Tipo de Limpieza</th>
            <th>Observaciones</th>
          </tr>
        </thead>

        <tbody>

          <tr>
            <td>OFCMI-1</td>
            <td>Gabinete</td>
            <td>O2432353</td>
            <td>Externa</td>
            <td></td>
          </tr>

        </tbody>

        </table>

      </section>

      <section className='section-table'>

        <span className='section-title'>MANTENIMIENTO CORRECTIVO</span>

        <table>

        <thead>

          <tr>
            <th>Id Equipo</th>
            <th>Descripcion de Equipo</th>
            <th>Numero de Serie</th>
            <th>Tipo de Limpieza</th>
            <th>Observaciones</th>
          </tr>
        </thead>

        <tbody>

          <tr>
            <td>OFCMI-1</td>
            <td>Gabinete</td>
            <td>O2432353</td>
            <td>Externa</td>
            <td></td>
          </tr>

        </tbody>

        </table>

      </section>
    </>
  );
}

export { DataAssets };
