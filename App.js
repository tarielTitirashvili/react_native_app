import { useState } from 'react'
import { StyleSheet, Text, Button, View, TextInput, FlatList } from 'react-native'

export default function App() {
  const [value, setValue] = useState('')
  const [todos, setTodos] = useState([])

  const handleChangeText = (text) => setValue(text)

  const handleButtonClick = () => {
    if (value.length) {
      setTodos(prev => [...prev, {value, id: (Math.random()*Math.random()).toString() }])
      setValue('')
    }
  }

  return (
    <View style={styles.appContainer} >
      <View style={styles.inputContainer}>
        <TextInput placeholderTextColor='gray' style={styles.inputStyles} placeholder='To Do' onChangeText={handleChangeText} value={value} />
        <Button onPress={handleButtonClick} color="purple" title='Add To Do' />
      </View>
      <View style={styles.goalsContainer}>
        <Text style={styles.listsTitle}>
          List Of To Does
        </Text>
        <FlatList
          data={todos}
          keyExtractor={(item, index)=>{ // by default it looks for key property in object here we are telling to look for id property
            return item.id
          }}
          renderItem={
            itemData => {
            return<View style={styles.listsTextContainer} >
              <Text style={styles.listsText} >
                {itemData.item}
              </Text>
            </View>
          }}
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
  inputContainer: {
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
  listsText: {
    color: 'skyblue',
  },
  listsTextContainer: {
    backgroundColor: 'purple',
    padding: 12,
    borderRadius: 8,
    marginBottom: 4
  },
  scrollStyles: {

  }
})
