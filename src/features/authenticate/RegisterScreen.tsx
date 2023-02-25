import {Alert, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import StyledInput from '../../components/common/StyledInput';
import useOnChangInput from '../hooks/useOnChangInput';
import StyledCheckBox from '../../components/base/StyledCheckBox';
import StyledRadioButton from '../../components/base/StyledRadioButton';
import StyledTouchable from '../../components/base/StyledTouchable';
import StyledText from '../../components/base/StyledText';

const RegisterScreen = () => {
  //level 1
  //   const [username, setUserName] = useState();
  //   const [password, setPassword] = useState();
  //   const [username, setUserName] = useState();
  //   const [username, setUserName] = useState();
  //   const [username, setUserName] = useState();
  //   const [policy, setPolicy] = useState();

  // level 2
  //   const [user, setUser] = useState({username: '', policy: '', password: ''});

  //   const onChangeUserName = (value: string) => {
  //     setUser({...user, username: value});
  //   };
  //   const onChangePassword = () => {};
  //   const onChangePolicy = () => {};

  // level 3
  const {user, onChangeText} = useOnChangInput();

  console.log('USER', user);
  // level 4: dùng REact hook form -libs

  const onSubmitInfo = () => {
    if (user.username.length < 6) {
      Alert.alert('USER CHƯA ĐÚNG ĐỊNH DẠNG');
    }
    // sau khi validate xong
    // call API
  };

  return (
    <View>
      <StyledInput
        value={user.username}
        onChangeText={us => onChangeText(us, 'username')}
        label="Tên đăng nhập"
      />
      <StyledInput
        value={user.password}
        onChangeText={ps => onChangeText(ps, 'password')}
        label="Mật khẩu"
      />
      <StyledRadioButton />
      <View>
        <StyledCheckBox
          isChecked={user.policy}
          id={'policy'}
          onCheck={(id, policy: boolean) => onChangeText(policy, id)}
        />
      </View>
      <StyledTouchable
        onPress={onSubmitInfo}
        customStyle={{
          borderWidth: 1.5,
          borderRadius: 20,
          borderColor: 'black',

          alignSelf: 'center',
          paddingVertical: 10,
          paddingHorizontal: 20,
          marginTop: 20,
        }}>
        <StyledText value="Gửi thông tin" />
      </StyledTouchable>
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({});
