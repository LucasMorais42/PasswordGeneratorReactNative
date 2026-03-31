import React, {useState} from "react";
import { View, Button, Text, Pressable } from "react-native";
import * as Clipboard from 'expo-clipboard';
import { styles } from "./SecButtonStyles";
import { InputPassword } from "../InputPassword/InputPassword";
import { passwordService } from "../../services/PasswordService";
import { TextInput } from "react-native";
import { InputLength } from "../InputLength/InputLength";


export function SecButton(){
    const [ pass, setPass ] = useState('')
    const [pressedGerar, isPressedGerar] = useState(false)
    const [pressedCopy, isPressedCopy] = useState(false)
    const [length, setLength] = useState('');

    function copyPassword() {
        Clipboard.setStringAsync(pass);
        isPressedCopy(true)
        setTimeout(() => isPressedCopy(false), 200);
    };

    function handlePassword() {
        const numericLength = Number(length);

        if (!numericLength || numericLength <= 0) {
            alert("Digite um tamanho válido!");
            return;
        }

        let token = passwordService(numericLength);
        setPass(token);

        isPressedGerar(true);
        setTimeout(() => isPressedGerar(false), 200);
    }

    return(
        <>
            {/*<Button
                title="GERAR SENHA 🙊"
                onPress={Pressionar}
            />*/}

            <InputLength length={length} setLength={setLength}></InputLength>
            <InputPassword pass={pass}/>
            
            <Pressable style={[styles.button, {backgroundColor: pressedGerar? '#011017': '#007ab3'}]}>
                <Text style={styles.texto} onPress={handlePassword}>GERAR SENHA 🙊</Text>
            </Pressable>

            <Pressable style={[styles.button, {backgroundColor: pressedCopy? '#011017': '#007ab3'}]} >
                <Text style={styles.texto} onPress={copyPassword}>COPIAR 🗒️</Text>
            </Pressable>
        </>


    )
}   