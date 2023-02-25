import {useState} from 'react';

const useOnChangInput = (initValue = '') => {
  const [user, setUser] = useState({username: '', policy: '', password: ''});
  const onChangeText = (value: string | boolean, key: string) => {
    setUser({...user, [key]: value});
  };

  return {user, onChangeText};
};

export default useOnChangInput;
