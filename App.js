import { StyleSheet, Text, Button, View } from 'react-native'

export default function App() {
  return (
    <View style={styles.container}>
      <Button style={styles.button} title='tariel 1' />
      <Text style={styles.text}>Hello World!! from Tariel!</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 12,
    backgroundColor: 'black',
    color: 'purple !important',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    borderWidth: 3,
    borderColor: '#fff',
    color: 'purple',
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
