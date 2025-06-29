import { useState } from 'react'
import { StyleSheet, Button, View, TextInput, Modal } from 'react-native'

const TodoInputWithButton = (props) => {
  const { handleButtonPress, visible } = props

  const [value, setValue] = useState('')

  const handleChangeText = (text) => setValue(text)

  const handleButtonPressLocale = () => {
    handleButtonPress(value)
    setValue('')
  }

  return (
    <Modal visible={visible} animationType='fade'>
      <View style={styles.inputContainer}>
        <TextInput placeholderTextColor='gray' style={styles.inputStyles} placeholder='To Do' onChangeText={handleChangeText} value={value} />
        <Button onPress={handleButtonPressLocale} color="purple" title='Add To Do' />
      </View>
    </Modal>
  )
}

export default TodoInputWithButton

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: 'black',
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
  inputStyles: {
    color: 'skyblue',
    padding: 8,
    borderWidth: 1,
    borderColor: 'skyblue',
    width: '70%',
    borderRadius: 6,
  },
})