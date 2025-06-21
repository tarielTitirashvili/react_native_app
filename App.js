import { useState } from 'react'
import { StyleSheet, Text, Button, View, TextInput } from 'react-native'

export default function App() {
  const [value, setValue] = useState()
  const handleChangeText = (text)=>{setValue(text)}
  return (
    <View style={styles.appContainer} >
      <View style={styles.inputContainer}>
        <TextInput style={styles.inputStyles} placeholder='To Do' onChangeText={handleChangeText} value={value} />
        <Button color="purple" title='Add To Do' />
      </View>
      <View></View>
    </View>
  )
}

const styles = StyleSheet.create({
  appContainer: {
    backgroundColor: '#fff',
    padding: 50,
    paddingHorizontal: 16
  },
  inputContainer:{
    paddingTop: 24,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8
  },
  inputStyles:{
    padding: 8,
    borderWidth: 1,
    borderBlockColor: 'purple',
    width: '70%',
    borderRadius: 6
  }
})
