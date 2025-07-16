 import { Text, View } from 'react-native';
import BorderBox from 'react-native-border';

export default function App() {
  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      <BorderBox
        icon={{
          uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Smiley.svg/600px-Smiley.svg.png',
        }}
      >
        <Text>This is inside the bordered box</Text>
      </BorderBox>
      <BorderBox
        icon={require('./right.png')}
        rotationDegrees={{
          top: '0deg',
          right: '90deg',
          bottom: '180deg',
          left: '-90deg',
        }}
      >
        <Text>Custom rotation for each side!</Text>
      </BorderBox>
      <BorderBox
        icon={require('./right.png')}
        rotationDegrees={{
          top: '45deg',
          right: '135deg',
          bottom: '225deg',
          left: '315deg',
        }}
      >
        <Text>Diagonal rotations on each side</Text>
      </BorderBox>
    </View>
  );
}
 