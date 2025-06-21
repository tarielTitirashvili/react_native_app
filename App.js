import { useState } from 'react'
import { StyleSheet, Text, Button, View, TextInput } from 'react-native'

export default function App() {
  const [value, setValue] = useState()
  const handleChangeText = (text)=>{setValue(text)}
  return (
    <View style={styles.appContainer} >
      <View style={styles.inputContainer}>
        <TextInput placeholderTextColor='gray' style={styles.inputStyles} placeholder='To Do' onChangeText={handleChangeText} value={value} />
        <Button color="purple" title='Add To Do' />
      </View>
      <View style={styles.goalsContainer}>
        <Text style={styles.listsTitleContainer}>
          List Of To Does
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: 'black',
    padding: 50,
    paddingHorizontal: 16,
  },
  inputContainer:{
    flex: 1,
    paddingTop: 24,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: 'purple'
  },
  inputStyles:{
    color: 'skyblue',
    padding: 8,
    borderWidth: 1,
    borderColor: 'skyblue',
    width: '70%',
    borderRadius: 6,
  },
  goalsContainer:{
    padding: 8,
    paddingHorizontal: 0,
    flex: 11
  },
  listsTitleContainer:{
    color: 'skyblue'
  }
})
