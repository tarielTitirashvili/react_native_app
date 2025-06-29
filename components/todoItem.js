import { Pressable, StyleSheet, Text, View, } from 'react-native'

const TodoItem = (props) => {
  const { text, onPress, id } = props

  return (
    // pressable is required component if we want to make some parts of app clickable there are also variations of touchable but they will be deprecated in future
    <View style={styles.listsTextContainer} >
      <Pressable
        style={({ pressed }) => pressed && styles.pressedItems} //for IOS
        android_ripple={{ color: '#ddd' }} // for Android
        onPress={onPress.bind(this, id)}
      >
        <Text style={styles.listsText} >
          {text}
        </Text>
      </Pressable>
    </View>
  )
}

export default TodoItem

const styles = StyleSheet.create({
  listsText: {
    color: 'skyblue',
    padding: 12,
    borderRadius: 8,
  },
  pressedItems: {
    opacity: '0.5'
    // backgroundColor: '#ddd',
  },
  listsTextContainer: {
    backgroundColor: 'purple',
    borderRadius: 8,
    marginBottom: 4
  },
})