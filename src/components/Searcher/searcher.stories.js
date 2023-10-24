import {InputSearch} from './index'

export default {
  title: 'Buscador',
  component: InputSearch,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  
};



export const Basic = {
  args: {
    state:'', 
    setState:() => {}, 
    placeholder: 'Texto interior', 
    action:() => {}, 
    width:'500px', 
    onKey: () => {}
  },
};

