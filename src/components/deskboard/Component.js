import React from 'react'
import { View, Text, TouchableOpacity, FlatList } from 'react-native'

//Style
import styles from './Style'

const Component = (props) => {
  const renderComponent = ({item}) => {
    return (
      <TouchableOpacity style={styles.task} activeOpacity={0.8}>
        <Text style={styles.time}>{item.date}:{item.min}</Text>
        <View style={styles.todo}>
          <View>
            <Text style={styles.title}>{item.task}</Text>
            <Text style={styles.sub}>{item.memo}</Text>
          </View>
          <TouchableOpacity style={styles.deleteBtn} onPress={()=> props.delete(item)}>
            <Text style={styles.delete}>X</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    )
  }
  return (
    <View style={styles.todoContainer}>
      <Text style={styles.header}>Todo Lists</Text>
      <View style={styles.taskContainer}>
        <FlatList 
          showsVerticalScrollIndicator={false}
          data={props.data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderComponent}
        />
      </View>
    </View>
  )
}

export default Component