import { StatusBar } from 'expo-status-bar';
import React from "react";
import { View, Text } from "react-native";

import { Menu } from "../components/Menu/Menu"
import { Logo } from '../components/Logo/Logo';
import { InputPassword } from '../components/InputPassword/InputPassword';
import { SecButton } from '../components/SecButton/SecButton';

import { styles } from './HomeStyles';

export function Home(){
    return(
        <View style={styles.container}>

            <View style={styles.logoContainer}>
                <Logo/>
            </View>

            <View style={styles.inputContainer}>
                <InputPassword/>
                <SecButton/>
            </View>

            {/*<Text>Home is workink!!👌</Text>
            <Text>Open up App.tsx to start working on your app!👌👌</Text>*/}

            <StatusBar style="light" />
        </View>
    )
}