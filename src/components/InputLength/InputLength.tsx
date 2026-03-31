import { Text, TextInput, View } from "react-native";
import { styles } from "../InputLength/InputLengthStyles";
import { useState } from "react";

interface InputLengthProps{
    length: string,
    setLength: (value: string) => void
}

export function InputLength({ length, setLength }: InputLengthProps){

    

    return(
        <TextInput
            placeholder="DIGITE O TAMANHO DA SENHA DESEJADA: "
            placeholderTextColor={'#cecece'}
            style={styles.inputPass}
            onChangeText={setLength}
            value={length}
        />  

    )   

}