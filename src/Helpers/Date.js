import dayjs from "dayjs";

export const currentDate = dayjs();
export const year = currentDate.$y
export const months = [
    { month: "Enero", num: "01" },
    { month: "Febrero", num: "02" },
    { month: "Marzo", num: "03" },
    { month: "Abril", num: "04" },
    { month: "Mayo", num: "05" },
    { month: "Junio", num: "06" },
    { month: "Julio", num: "07" },
    { month: "Agosto", num: "08" },
    { month: "Septiembre", num: "09" },
    { month: "Octubre", num: "10" },
    { month: "Noviembre", num: "11" },
    { month: "Diciembre", num: "12" }
  ];

export const years = []
for (let i = 0; i < 12; i++) {
  years.push(year + i);
}

export function findMounth(num){
 const result = months.find((month) => month.num === num )
 return result.month
}