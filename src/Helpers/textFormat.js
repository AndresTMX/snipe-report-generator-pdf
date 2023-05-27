//Funcion transformadora de texto, lo formatea a mayusculas y minusculas 

function transformText (text) {
    const formattedText = text.toLowerCase().replace(/(^|\s)\S/g, (match) => match.toUpperCase());
    return formattedText;
  }

export default function transfromValues (user, company, department, location, manager, ) {

    const textDefault = "No asignado";
    const nameUser = user? transformText(user): textDefault;
    const nameCompany = company ? transformText(company) : textDefault;
    const namedepartment = department ? transformText(department) : textDefault;
    const nameLocation= location ? transformText(location) : textDefault;
    const nameManager = manager? transformText(manager) : textDefault;

    return {nameUser, nameCompany, namedepartment, nameLocation, nameManager}
}