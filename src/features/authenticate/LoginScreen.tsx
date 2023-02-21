import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Images from '../../assests';
import StyledCheckBox from '../../components/base/StyledCheckBox';
import StyledRadioButton from '../../components/base/StyledRadioButton';
import SocialLogin from '../../components/common/SocialLogin';
import StyledInput from '../../components/common/StyledInput';

const LoginScreen = () => {
  const [formData, setFormData] = useState(false);

  const onCheckRemember = (v: boolean) => {
    setFormData(v);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logo}>CAFE</Text>
        <Text style={styles.welcomeText}>Welcome back!</Text>
        <Text style={styles.descriptionText}>Login to your account</Text>
      </View>
      {/* <View style={{flex: 1, backgroundColor: 'white', paddingHorizontal: 40}}>
        <StyledInput
          label="Username"
          placeholderText="Enter your username"
          customStyle={styles.input}
          leftIcon={Images.icons.loginScreen.user}
        />
        <StyledInput
          label="Password"
          placeholderText="Enter your password"
          customStyle={styles.input}
          leftIcon={Images.icons.loginScreen.password}
        />
        <TouchableOpacity style={styles.buttonSignIn}>
          <Text>Sign in</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.socialLoginContainer}>
        <SocialLogin />
        <SocialLogin />
        <SocialLogin />
      </View> */}
      {/* <StyledCheckBox color={'green'} onCheck={onCheckRemember} /> */}
      <StyledRadioButton />
      <View style={styles.bottom}>
        <Text>Don't have an account? </Text>
        <TouchableOpacity>
          <Text style={styles.signUpText}>Sign up here</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    color: '#2892ef',
    fontSize: 56,
    fontWeight: 'bold',
  },
  welcomeText: {
    color: '#787878',
    fontSize: 22,
    fontWeight: '500',
  },
  descriptionText: {
    color: '#787878',
    fontSize: 16,
  },
  buttonSignIn: {
    backgroundColor: '#2892ef',
    alignSelf: 'center',
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 30,
  },
  socialLoginContainer: {
    flex: 0.5,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  input: {
    borderRadius: 25,
    paddingLeft: 25,
  },
  bottom: {
    flex: 0.5,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  signUpText: {
    color: '#71c1fe',
    fontWeight: '700',
  },
});
