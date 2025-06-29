import { StyleSheet, Text, View, } from 'react-native'

const TodoItem = ({text}) => {
  return (
    <View style={styles.listsTextContainer} >
      <Text style={styles.listsText} >
        {text}
      </Text>
    </View>
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