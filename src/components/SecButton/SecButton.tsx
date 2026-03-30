import React, {useState} from "react";
import { View, Button, Text, Pressable } from "react-native";

import { styles } from "./SecButtonStyles";
import { InputPassword } from "../InputPassword/InputPassword";
import { passwordService } from "../../services/PasswordService";


export function SecButton(){
    const [ pass, setPass ] = useState('')

    function Pressionar(){
        console.log("Gerador de senha pressionado!")
    }

    function handlePassword(){
        let token = passwordService()
        setPass(token)
    }

    return(
        <>
            {/*<Button
                title="GERAR SENHA 🙊"
                onPress={Pressionar}
            />*/}

            <InputPassword pass={pass}/>
            

            <Pressable style={styles.button}>
                <Text style={styles.texto} onPress={handlePassword}>GERAR SENHA 🙊</Text>
            </Pressable>

            <Pressable style={styles.button}>
                <Text style={styles.texto} onPress={Pressionar}>COPIAR 🗒️</Text>
            </Pressable>
        </>


    )
}