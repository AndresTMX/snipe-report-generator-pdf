import { useGetAllMaintances } from "../../Hooks/useGettAllMaintances";
import { Container } from "@mui/material";

function GetAllMaintances() {

    const {pageMaintances, loadingMaintances, errorMaintances} = useGetAllMaintances(0,10);

    return ( 
        <>
        
      <Container>
            {!loadingMaintances && pageMaintances && pageMaintances.map((maintance) => (
              <CardViewMaintance 
              key={maintance.id} 
              idAsset={maintance.asset.id}
              asset={maintance.asset.name}
              tag={maintance.asset.asset_tag}
              model={maintance.model.name}
              title={maintance.title}
              location={maintance.location.name}
              notes={maintance.notes}
              provider={maintance.supplier.name}
              cost={maintance.cost}
              type={maintance.asset_maintenance_type}
              init={maintance.start_date.date}
              end={maintance.completion_date.date}
              />
            ))}
          </Container>

        </>
     );
}

export {GetAllMaintances};