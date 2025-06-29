import { useState } from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import TodoItem from './components/todoItem'
import TodoInputWithButton from './components/todoInputWithButton'

export default function App() {
  const [todos, setTodos] = useState([])

  const handleButtonPress = (value) => {
    if (value.length) {
      setTodos(prev => [...prev, { value, id: (Math.random() * Math.random()).toString() }])
    }
  }

  return (
    <View style={styles.appContainer} >
      <TodoInputWithButton handleButtonPress={handleButtonPress} />
      <View style={styles.goalsContainer}>
        <Text style={styles.listsTitle}>
          List Of To Does
        </Text>
        <FlatList
          data={todos}
          keyExtractor={(item, index) => { // by default it looks for key property in object here we are telling to look for id property
            return item.id
          }}
          renderItem={itemData => <TodoItem text={itemData.item.value} />}
          alwaysBounceVertical={false}
          style={styles.scrollStyles}
        />
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
  goalsContainer: {
    padding: 8,
    paddingHorizontal: 0,
    flex: 11
  },
  listsTitle: {
    padding: 8,
    paddingHorizontal: 0,
    color: 'purple',
    fontSize: 18
  },
  scrollStyles: {

  }
})
