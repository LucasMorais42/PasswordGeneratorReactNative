import React from "react";
import { Text, TextInput } from "react-native";

import { styles } from "./InputPasswordStyles";
import { View } from "react-native";

interface inputPasswordProps{
    pass: string
}

export function InputPassword(props: inputPasswordProps){
    return(     
         <TextInput
            placeholder="PASSWORD"
            placeholderTextColor={'#cecece'}
            style={styles.inputPass}
            value={props.pass}
        />  
    )
}