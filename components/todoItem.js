import { Pressable, StyleSheet, Text, View, } from 'react-native'

const TodoItem = (props) => {
  const { text, onPress, id } = props

  const handlePress = () => onPress(id)

  return (
    // pressable is required component if we want to make some parts of app clickable there are also variations of touchable but they will be deprecated in future
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