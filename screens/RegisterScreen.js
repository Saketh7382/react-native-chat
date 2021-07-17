import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {Input, Button} from 'react-native-elements';
import {auth} from '../firebase';

const RegisterScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [imageURL, setimageURL] = useState('');

  const register = () => {
    auth.createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;

        user.updateProfile({
          displayName: name,
          photoURL: imageURL? imageURL:"https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg"
        }).then(() => {
          // Update successful
          // ...
        }).catch((error) => {
          // An error occurred
          // ...
        });

        navigation.popToTop();
      })
      .catch((error) => {
        var errorMessage = error.message;
        alert(errorMessage);
    });
  }

  return (
    <View style={styles.container}>
      <Input
        placeholder="Enter your Name"
        label="Name"
        leftIcon= {{
          type:'material',
          name: 'badge'
        }}
        value={name}
        onChangeText={text=>setName(text)}
      />

      <Input
        placeholder="Enter your email"
        label="Email"
        leftIcon= {{
          type:'material',
          name: 'email'
        }}
        value={email}
        onChangeText={text=>setEmail(text)}
      />

      <Input
        placeholder="Enter your password"
        label="Password"
        leftIcon= {{
          type:'material',
          name: 'lock'
        }}
        value={password}
        onChangeText={text=>setPassword(text)}
        secureTextEntry
      />

      <Input
        placeholder="Enter Image URL"
        label="Profile Picture"
        leftIcon= {{
          type:'material',
          name: 'face'
        }}
        value={imageURL}
        onChangeText={text=>setimageURL(text)}
      />

      <Button
        title="Register"
        buttonStyle={styles.button}
        onPress={register}
      />

    </View>
  )
}

export default RegisterScreen;

const styles = StyleSheet.create({
  button: {
    width: 200,
    marginTop: 10
  },
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 10
  }
});
