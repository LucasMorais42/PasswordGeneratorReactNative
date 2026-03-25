import React, {useState} from "react";
import { View, Button, Text, Pressable } from "react-native";

import { styles } from "./SecButtonStyles";



export function SecButton(){
    const [ pass, setPass ] = useState('')

    function Pressionar(){
        console.log("Gerador de senha pressionado!")
    }

    function handlePassword(){

    }

    return(
        <>
            {/*<Button
                title="GERAR SENHA 🙊"
                onPress={Pressionar}
            />*/}

            <Pressable style={styles.button}>
                <Text style={styles.texto} onPress={Pressionar}>GERAR SENHA 🙊</Text>
            </Pressable>

            <Pressable style={styles.button}>
                <Text style={styles.texto} onPress={Pressionar}>COPIAR 🗒️</Text>
            </Pressable>
        </>


    )
}