import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import StyledInput from '../../components/common/StyledInput';
import SocialLogin from '../../components/common/SocialLogin';

const LoginScreen = () => {
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
          alignItems: 'center', // chiều sẽ vuông góc với flexDirection
          justifyContent: 'center', // chiều sẽ trùng với flexDirection
        }}>
        <Text style={{color: '#2892ef', fontSize: 56, fontWeight: 'bold'}}>
          CAFE
        </Text>
        <Text style={{color: '#787878', fontSize: 22, fontWeight: '500'}}>
          Welcome back!
        </Text>
        <Text style={{color: '#787878', fontSize: 16}}>
          Login to your account
        </Text>
      </View>

      <View style={{flex: 1, backgroundColor: 'white', paddingHorizontal: 40}}>
        <StyledInput
          label="Username"
          placeholderText="Enter your username"
          customStyle={{borderRadius: 25, paddingLeft: 25}}
        />

        <StyledInput
          label="Password"
          placeholderText="Enter your password"
          customStyle={{borderRadius: 25, paddingLeft: 25}}
        />

        <TouchableOpacity
          style={{
            backgroundColor: 'red',
            alignSelf: 'center',
            padding: 15,
            borderRadius: 10,
          }}>
          <Text>Sign in</Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          flex: 0.5,
          backgroundColor: 'white',
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <SocialLogin />
        <SocialLogin />
        <SocialLogin />
      </View>
      <View style={{flex: 0.5, alignItems: 'center'}}>
        <Text>
          Don't have an account?{' '}
          <Text style={{color: '#71c1fe', fontWeight: '700'}}>
            Sign up here
          </Text>
        </Text>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
