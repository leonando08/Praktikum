import { Text, View, StyleSheet } from 'react-native';

export default function About() {
  return (
    <View style={gaya.container}>
      <Text style={gaya.teks}>Reward</Text>
    </View>
  );
}

const gaya = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EC2025',
    alignItems: 'center',
    justifyContent: 'center',
  },
  teks: {
    color: '#fff',
  },
});
