import { InputSearch } from "../Searcher";
import { useSearcher } from "../Searcher/useSearcher";
import { useGetSearch } from "../../Hooks/useGetSearch";
import { Box, Typography, Stack, Skeleton, Button } from "@mui/material";
import { ScrollContainer } from "../../Containers/ScrollContainer";
//icons
import { PiDesktopTowerDuotone } from "react-icons/pi"; //gabinete
import { AiOutlineLaptop } from "react-icons/ai"; //lap
import { BsKeyboard } from "react-icons/bs"; //teclado
import { FiMonitor } from "react-icons/fi"; //monitor
import { BsMouse3 } from "react-icons/bs"; //mouse

/*/
  Este componente es un minibuscador que trae 
  activos buscando  por su nombre de usuario

  Recibe un limite , que es el limite de resultados
  que va traer de la api

  Una funcion toggle que se ejecutara al dar click en
  el boton acompañado de cada resultado de busqueda

  Un array de mantenimientos de donde extrae los
  nombres, ofcmi y categorias 
/*/
function MiniSearcher({limit, Toggle, maintances}) {

    //este estado captura la busqueda escrita en el input
    const {search, setSearch} = useSearcher()

    //hook que hace la funcion de traer los resultados de busqueda
    const {actions, states} = useGetSearch(search, limit)

    const { Search, setResults } = actions 

    const {results, loading, error} = states 

    //Flat aplana los resultado de multiples array a un solo array
    const flatResults = results? results.flat() : [];

    //esta funcion selecciona el icono a renderizar en el resultado
    //de busqueda basandose en la categoria del resultado
    function renderIcon(category) {
        if (category.toLowerCase().includes("laptop")) {
          return <AiOutlineLaptop />;
        }
        
        if (category.toLowerCase().includes("gabinete")) {
          return <PiDesktopTowerDuotone />;
        }
        
        if (category.toLowerCase().includes("monitor")) {
          return <FiMonitor />;
        }
        
        if (category.toLowerCase().includes("teclado")) {
          return <BsKeyboard />;
        }
        
        if (category.toLowerCase().includes("mouse")) {
          return <BsMouse3 />;
        }
    }
    //esta funcion responde al boton enter del teclado
    //ejecutando la funcion de busquda
    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
          Search();
        }
    }
    //extrae el nombre del usuario de estar asignado, de no estar asignado retornara el estatus
    const extractNameUser = (item) => item.assigned_to?.name? item.assigned_to.name: item.status_label.name; 
    //esta funcion valida si el activo de la lista de resultados ya 
    //ha sido agregado, si lo esta marcara contained, de lo contrario outlined
    const validateItem = (tagItem) => {
        let variant
        const validate = maintances.find((item) => item.tag === tagItem)
        
        if(!validate){
            variant = "outlined"
        }else{
            variant = "contained"
        }
        return variant

    }

    return ( 
        <>
            <Box
                onClick={() => setResults([])}
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '15px',
                    width: '90%',
                    margin: 'auto'
                }}
            >
                <Typography variant="subtitle2">
                    Agrega activos buscandolos por su usuario
                </Typography>
                <InputSearch
                    state={search}
                    setState={setSearch}
                    placeholder={'miguel duran'}
                    action={ Search }
                    width={'100%'}
                    onKey={handleKeyPress}
                />
            </Box>

            <ScrollContainer
            height={results?.length > 0? '120px' : 'auto' }
            >
                <Stack 
                direction='column'
                gap='5px'>
                    <>

                        {loading && (
                            <>
                                <Skeleton variant="rounded" width={'100%'} height={30} />
                                <Skeleton variant="rounded" width={'100%'} height={30} />
                                <Skeleton variant="rounded" width={'100%'} height={30} />
                            </>
                        )}

                        {!loading && !error && results?.length>0 &&(
                            flatResults.map((result, index) => (
                               <Box 
                               key={result.id}
                               sx={{
                                display:'flex',
                                alignItems:'center',
                                justifyContent:'space-between'
                               }}
                               >
                               <Typography variant="subtitle2" fontSize='12px'> 
                                {extractNameUser(result)}
                               </Typography>

                               <Button
                                    onClick={() => Toggle(result)}
                                    variant={validateItem(result.asset_tag)}
                                    size="small"
                                    startIcon={renderIcon(result.category?.name)}
                                    color="primary" 
                                    >
                                    {result.asset_tag.split('-')[1]}
                                    </Button>
                               </Box>
                            ))
                        )}
                    </>
                </Stack>
            </ScrollContainer>
        </>
     );
}

export {MiniSearcher};