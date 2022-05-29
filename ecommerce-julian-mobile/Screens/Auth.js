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
        <View style={globalStyle.mainCardView}>
            <View  style={{flexDirection: 'column'}}>
                <Text>{loginView ? 'Login' : 'Registro de usuario'}</Text>                
                <TextInput
                    value={email}
                    onChangeText={setEmail}
                    placeholder="Ingrese email"
                    style={globalStyle.textoCards}
                ></TextInput>
                <TextInput
                    secureTextEntry={true}
                    value={password}
                    onChangeText={setPassword}
                    placeholder="Ingrese password"
                    style={globalStyle.textoCards}
                ></TextInput>
                {loginView ?
                    <TouchableOpacity onPress={handleLogin}>
                        <Text>Login</Text>
                    </TouchableOpacity>
                    :
                    <TouchableOpacity onPress={handleSignup}>
                        <Text>Sign up</Text>
                    </TouchableOpacity>
                }
                <View style={{flexDirection: 'column', flex:'10'}}>
                    <Text style={globalStyle.textoCards}>{loginView ? 'No tienes usuario?' : 'Ya tienes usuario?'}</Text>
                    <TouchableOpacity
                        onPress={() => setLoginView(!loginView)}>
                        <Text>
                            {loginView ? 'sign up' : 'sign in'}
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default Auth;
