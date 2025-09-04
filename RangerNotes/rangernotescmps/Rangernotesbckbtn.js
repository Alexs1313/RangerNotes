import { useNavigation } from '@react-navigation/native';
import { Image, TouchableOpacity } from 'react-native';

const Rangernotesbckbtn = () => {
  const nav = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => {
        nav.goBack();
      }}
      activeOpacity={0.6}
    >
      <Image source={require('../../assets/images/rangerbackbtn.png')} />
    </TouchableOpacity>
  );
};

export default Rangernotesbckbtn;
