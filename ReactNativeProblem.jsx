import React from 'react';
import {Text, View, Button} from 'react-native';

const YourApp = () => {
  const [count, setCount] = React.useState(0)
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>Click on like to increase the count, Count: {count}</Text>

      <Button title="Like" onPress = {()=>setCount(prevCount => prevCount + 1)} />
    </View>
  );
};

export default YourApp;