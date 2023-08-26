import React from 'react';
import { View, Text } from 'react-native';
import colors from './src/theme/colors';
import AntDesign from 'react-native-vector-icons/AntDesign';

const App = () => {
  return (
    <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>
        Hello World
        <AntDesign name="stepforward" />
      </Text>
    </View>
  );
};

export default App;
