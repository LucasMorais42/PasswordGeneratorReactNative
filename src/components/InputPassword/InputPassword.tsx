import React from "react";
import { TextInput } from "react-native";

import { styles } from "./InputPasswordStyles";

export function InputPassword(){
    return(
        <TextInput
            placeholder="PASSWORD"
            placeholderTextColor={'#cecece'}
            style={styles.inputPass}
        />
    )
}