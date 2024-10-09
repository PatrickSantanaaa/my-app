import React, { useState } from "react";
import {Text, View, Image, TextInput, TouchableOpacity, Alert, ActivityIndicator} from 'react-native';
import { style } from "./styles";
import Logo from "../../assets/logo.png"
import {MaterialIcons, AntDesign} from '@expo/vector-icons'
export default function Login(){

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [loading,setLoading] = useState(false)
   async function getLogin(){
        try{
            setLoading(true)
            if(!email || !password){
                return Alert.alert('Atenção','Informe os campos obrigatórios!')
            }
            setTimeout(()=>{
                Alert.alert('Logado com sucesso')
                setLoading(false)
            },3000)
        } catch(error){
            console.log(error)
        }
    }

    return (
        <View style={style.container}>
            <View style={style.boxTop}>
                <Image source={Logo} style={style.logo} resizeMode="contain"></Image>
                <Text style={style.titulo}>Bem vindo de volta!</Text>
            </View>
            <View style={style.boxMedium}>
                <Text style={style.tituloInput}>ENDEREÇO E-MAIL</Text>
                <View style={style.boxInput}>
                    <TextInput style={style.input} value={email} onChangeText={setEmail}></TextInput>
                    <MaterialIcons style={style.icons} name='email'></MaterialIcons>
                </View>

                <Text style={style.tituloInput}>SENHA</Text>
                <View style={style.boxInput}>
                    <TextInput style={style.input} value={password} onChangeText={setPassword}></TextInput>
                    <MaterialIcons style={style.icons} name='remove-red-eye'></MaterialIcons>
                </View>
            </View>
            <View style={style.boxBottom}>
                <TouchableOpacity style={style.button} onPress={() => getLogin()}>
                    {loading?<ActivityIndicator color={'#FFF'} size={"small"}/>:<Text style={style.textButton}>Entrar</Text>}
                </TouchableOpacity>
                <Text style={style.textBottom}>Não tem conta? <Text style={style.textBottomCreate}>Crie agora!</Text></Text>
            </View>
        </View>
    )
}