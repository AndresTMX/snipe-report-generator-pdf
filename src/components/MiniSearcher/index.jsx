import { InputSearch } from "../Searcher";
import { useSearcher } from "../Searcher/useSearcher";
import { useGetSearch } from "../../Hooks/useGetSearch";
import { Box, Typography, Paper, Stack, Skeleton, Button } from "@mui/material";
import { ScrollContainer } from "../../Containers/ScrollContainer";
//icons
import { PiDesktopTowerDuotone } from "react-icons/pi"; //gabinete
import { AiOutlineLaptop } from "react-icons/ai"; //lap
import { BsKeyboard } from "react-icons/bs"; //teclado
import { FiMonitor } from "react-icons/fi"; //monitor
import { BsMouse3 } from "react-icons/bs"; //mouse


function MiniSearcher({limit, Toggle}) {

    const {search, setSearch} = useSearcher()

    const {actions, states} = useGetSearch(search, limit)

    const { Search, setResults } = actions 

    const {results, loading, error, input} = states 

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

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
          Search();
        }
      };

    const extractNameUser = (item) => {
        let name

        if(item?.assigned_to?.name){
            name = item.assigned_to.name
        }else{
            name = item.status_label.name
        }

        return name
    }



    return ( 
        <>
            <Box
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
                onClick={() => setResults([])}
                direction='column'
                gap='5px'>
                    <>

                        {loading && (
                            <>
                                <Skeleton variant="rounded" width={113} height={30} />
                                <Skeleton variant="rounded" width={113} height={30} />
                                <Skeleton variant="rounded" width={113} height={30} />
                            </>
                        )}

                        {!loading && !error && results?.length>0 &&(
                            results.map((result, index) => (
                               <Box 
                               sx={{
                                display:'flex',
                                alignItems:'center',
                                justifyContent:'space-between'
                               }}
                               key={index}>
                               <Typography variant="subtitle2">
                                {extractNameUser(result)}
                               </Typography>

                               <Button
                                    label={result.asset_tag}
                                    onClick={() => Toggle(result)}
                                    variant="outlined"
                                    size="small"
                                    startIcon={renderIcon(result.category?.name)}
                                    color="primary" 
                                    >
                                    {result.asset_tag}
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