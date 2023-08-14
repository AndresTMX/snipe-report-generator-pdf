//Funcion transformadora de texto, lo formatea a mayusculas y minusculas 

function transformText (text) {
    const formattedText = text.toLowerCase().replace(/(^|\s)\S/g, (match) => match.toUpperCase());
    return formattedText;
  }

export default function transfromValues (user, company, department, location, manager, jobtitle ) {

    const textDefault = "No asignado";
    const nameUser = user? transformText(user): textDefault;
    const nameCompany = company ? transformText(company) : textDefault;
    const nameDepartment = department ? transformText(department) : textDefault;
    const nameLocation= location ? transformText(location) : textDefault;
    const nameManager = manager? transformText(manager) : textDefault;
    const nameJobtitle = jobtitle? transformText(jobtitle): textDefault;

    return {nameUser, nameCompany, nameDepartment, nameLocation, nameManager, nameJobtitle}
}