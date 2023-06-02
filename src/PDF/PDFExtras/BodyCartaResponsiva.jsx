import { Text, View, StyleSheet } from "@react-pdf/renderer";

function BodyCartaResponsiva({storage}) {

    return ( 
        <>
         <View>

            <View>
                Coatzacoalcos, Veracruz Fecha año dia 
            </View>

            <View>
                <View>
                    <Text>DEPARTAMENTO DE SISTEMAS</Text>
                    <Text>ASUNTO: CARTA RESPONSIVA DE "NOMBRE DEL ACTIVO"</Text>
                    <Text>Sirva este documento como comprobante de entrega de {category} , marca
                    {manufacturer}, modelo {model}, con número de serie {serial}, el cuál le prtenece
                    a {company}, y se entrega a {user} quien a partir del día {dateday}, se compromete
                    a resguardarlo y darle uso estrictamente laboral y evitar:
                    </Text>

                    <Text>
                        - Contacto con agua
                        - Conectarlo de forma erronea 
                        - Sobrecalentamiento 
                        - Cerrarlo de forma abrupta
                        - Escanear con grapas en las hojas (cristal o alimentador)
                        - Llegar al limite establecido de tinta
                    </Text>
                </View>

            </View>





         </View>
        </>
     );
}

export default BodyCartaResponsiva;