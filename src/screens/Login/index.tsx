import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Text, TextInput, View, Image, TouchableOpacity, } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { styles } from './styles';
import { MaterialIcons } from '@expo/vector-icons';
import { cores } from '../../../utils/cores';
import { useIsFocused } from '@react-navigation/native';

export const Login = () => {
    const [focoLogin, setFocoLogin] = useState(false)
    const [focoSenha, setFocoSenha] = useState(false)

    function handleOnFocusLogin() {
        setFocoLogin(true);
    }
    function handleOnBlurLogin() {
        setFocoLogin(false);
    }
    function handleOnFocusSenha() {
        setFocoSenha(true);
    }
    function handleOnBlurSenha() {
        setFocoSenha(false);
    }

    return (

        <View style={styles.container}>
            <View style={styles.goBack}>
                <Feather
                    name="arrow-left"
                    size={26}
                    color={cores.textColor}
                />
                <Text style={styles.title}>Twitch</Text>
            </View>
            <View>
                <View style={styles.formView}>
                    <Text style={styles.formSubtitle}>Nome de usuário</Text>
                    <TextInput                        
                        onFocus={handleOnFocusLogin}
                        onBlur={handleOnBlurLogin}
                        selectionColor={'#9147ff'}
                        style={focoLogin ? styles.formInputFocused : styles.formInput}
                        autoCorrect={false}
                        autoCapitalize='none'                        
                    />
                </View>
                <View style={styles.formView}>
                    <Text style={styles.formSubtitle}>Senha</Text>
                    <View style={styles.passwordInput}>
                        <TextInput                           
                            onFocus={handleOnFocusSenha}
                            onBlur={handleOnBlurSenha}
                            selectionColor={'#9147ff'}
                            style={focoSenha ? styles.formInputFocused : styles.formInput}                            
                            autoCorrect={false}
                            autoCapitalize='none'
                            //Colocado após apresentação
                            secureTextEntry={true}            
                            
                        />
                        <TouchableOpacity
                            style={{ alignItems: "center" }}
                        >
                            <MaterialCommunityIcons
                                style={styles.eyeIcon}
                                name='eye'
                                size={20}
                                color={cores.secondaryTextColor}
                            />
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={styles.troubleBtn}>
                        <Text
                            style={styles.troubleTxt}
                        >
                            Problemas ao efetuar login?
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        activeOpacity={0.7}
                        style={styles.loginBtn}
                    >

                        <Text
                            style={styles.loginTxt}
                        >
                            Entrar
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
            <StatusBar style="auto" />
        </View>
    );
}