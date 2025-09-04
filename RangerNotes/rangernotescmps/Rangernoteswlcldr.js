import {
  Image,
  Platform,
  ImageBackground as RangerNotesBackground,
  ScrollView,
} from 'react-native';

const Rangernoteswlcldr = () => {
  return (
    <RangerNotesBackground
      source={require('../../assets/images/rangersecbg.png')}
      style={{ flex: 1 }}
    >
      <ScrollView
        contentContainerStyle={{
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1,
        }}
      >
        {Platform.OS === 'ios' ? (
          <Image source={require('../../assets/images/rangerlogo.png')} />
        ) : (
          <Image
            source={require('../../assets/images/tigerlogotrn.png')}
            style={{ width: 365, height: 365 }}
          />
        )}
      </ScrollView>
    </RangerNotesBackground>
  );
};

export default Rangernoteswlcldr;
