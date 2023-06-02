function useComind( company ) {
  let newName;

  if (company === "Conexiones Y Mangueras Industriales De Minatitlan") {
    //cortamos el nombre separandolo por arrays de una palabra
    const nameWhitJumpLine = company ? company.split(" ", 6) : "name";
    //definimos la primera y la segunda linea del nombre
    const nameLineOne = nameWhitJumpLine
      ? `${nameWhitJumpLine[0]}" "${nameWhitJumpLine[1]}' ' ${nameWhitJumpLine[2]}`
      : "null";
    const nameLineTwo = nameWhitJumpLine
      ? `${nameWhitJumpLine[3]}" "${nameWhitJumpLine[4]}' ' ${nameWhitJumpLine[5]}`
      : "null";
    //eliminamos caracteres innecesarios
    const caracteresDelete = /[.,!"']/g;
    const stringName = nameWhitJumpLine
      ? `${nameLineOne} \n ${nameLineTwo}`
      : "null";
    //obtenemos el nombre de la empresa con un salto de linea en un string
    newName = stringName ? stringName.replace(caracteresDelete, "") : "null";
  } else {
    newName = company;
  }

  return { newName };
}

export { useComind };
