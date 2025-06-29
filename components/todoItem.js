import { Pressable, StyleSheet, Text, View, } from 'react-native'

const TodoItem = (props) => {
  const { text, onPress, id } = props

  const handlePress = () => onPress(id)

  return (
    <Pressable onPress={handlePress}>
      <View style={styles.listsTextContainer} >
        <Text style={styles.listsText} >
          {text}
        </Text>
      </View>
    </Pressable>
  )
}

export default TodoItem

const styles = StyleSheet.create({
  listsText: {
    color: 'skyblue',
  },
  listsTextContainer: {
    backgroundColor: 'purple',
    padding: 12,
    borderRadius: 8,
    marginBottom: 4
  },
})