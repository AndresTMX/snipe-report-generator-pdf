import { useGetUsers } from "../../Hooks/useGetUsers";
import { Container } from "@mui/material";
import {UserCardMaintenances} from '../../components/UserCardMaintenances'; 

function CreateMaintances() {

    const { dataUsers, loading, error } = useGetUsers();

    return (
      <>
        <Container>
          {!loading &&
            dataUsers &&
            dataUsers.map((user) => (
              <UserCardMaintenances key={user.id} username={user.name} />
            ))}
        </Container>
      </>
    );
}

export  {CreateMaintances};