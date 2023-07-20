//material ui
import { IconButton} from "@mui/material"
//icons
import {AiOutlineLaptop} from 'react-icons/ai' //lap
import {BsKeyboard} from 'react-icons/bs'  //teclado
import {BsMouse3} from 'react-icons/bs'  //mouse
import {FiMonitor} from 'react-icons/fi' //monitor
import {PiDesktopTowerDuotone} from 'react-icons/pi' //gabinete

function ITemMaintance({category, tag, id}) {

  function renderIcon(category) {

    if(category === 'LAPTOP'){
      return <AiOutlineLaptop/>
    }

    if(category === 'GABINETE'){
      return <PiDesktopTowerDuotone/>
    }

    if(category === 'MONITOR'){
      return <FiMonitor/>
    }

    if(category === 'TECLADO'){
      return <BsKeyboard/>
    }

    if(category === 'MOUSE'){
      return <BsMouse3/>
    }

  }

  return (
    <IconButton>

      {renderIcon()}

      <strong>{tag}</strong>

    </IconButton>
  );
}

export { ITemMaintance };
