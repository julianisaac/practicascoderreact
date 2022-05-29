import React, { useState } from 'react';
import { auth } from '../firebase/config';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import globalStyle from '../Styles/Global';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';

const Auth = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [loginView, setLoginView] = useState(false);

    const handleSignup = () => {
        if (email !== "" && password != ""){
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => { 
                    // Signed in 
                    console.log(userCredential)
                    const user = userCredential.user;
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorCode, errorMessage);
                    // ..
                })
                .finally(()=> {
                    setEmail("");
                    setPassword("");
                })
        }
    }

    const handleLogin = () => {
        if (email !== "" && password != ""){
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    console.log(user);
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorCode, errorMessage);
                })
                .finally(()=> {
                    setEmail("");
                    setPassword("");
                })
        }
    }
    
    return (
        <View style={globalStyle.inputView}>
            <View>
                <Text style={{fontWeight: 'bold', alignSelf: 'center'}}>{loginView ? 'Login' : 'Registro de usuario'}</Text>                
                <TextInput
                    value={email}
                    onChangeText={setEmail}
                    placeholder="Ingrese email"
                    style={globalStyle.textInput}
                ></TextInput>
                <TextInput
                    secureTextEntry={true}
                    value={password}
                    onChangeText={setPassword}
                    placeholder="Ingrese password"
                    style={globalStyle.textInput}
                ></TextInput>
                {loginView ?
                    <TouchableOpacity onPress={handleLogin}>
                        <Text style={{fontWeight: 'bold', alignSelf: 'center', borderWidth: 1, width: 200, borderRadius: 10, textAlign: "center"}}>Login</Text>
                    </TouchableOpacity>
                    :
                    <TouchableOpacity onPress={handleSignup}>
                        <Text style={{fontWeight: 'bold', alignSelf: 'center', borderWidth: 1, width: 200, borderRadius: 10, textAlign: "center"}}>Sign up</Text>
                    </TouchableOpacity>
                }
                <View style={{height: 170,
                                marginBottom: 50,
                                alignItems: "center",
                                marginTop: 50,
                                alignSelf: "center"}}>
                    <Text style={globalStyle.textoCards}>{loginView ? 'No tienes usuario?' : 'Ya tienes usuario?'}</Text>
                    <TouchableOpacity
                        onPress={() => setLoginView(!loginView)}>
                        <Text style={{  width: 200,
                                        marginTop: 10,
                                        backgroundColor: "antiquewhite",
                                        padding: 5,
                                        borderRadius: 10,
                                        textAlign: 'center',
                                        fontWeight: 'bold',
                            }}>
                            {loginView ? 'sign up' : 'sign in'}
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default Auth;
