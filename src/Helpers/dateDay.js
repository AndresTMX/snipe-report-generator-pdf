
export default function formatDateDay(dateDay){
    const date = new Date(dateDay); // fecha actual
    const year = date.getFullYear();
    const mounth = date.toLocaleString('default', { month: 'long' });
    const fecha = dateDay? dateDay.split('-', 3):'00';
    const day = fecha? fecha[2]: '00';
    return{year, day, mounth}
}