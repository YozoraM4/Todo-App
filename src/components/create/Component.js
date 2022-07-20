import React from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'

//Style
import styles from '../create/Style'

const Component = (props) => {
  return (
    <View style={styles.createContainer}>
      <Text style={styles.header}>Create New Task</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          onChangeText={props.onChangeTask}
          value={props.task}
          placeholder="Task"
        />
        <TextInput
          style={styles.input}
          onChangeText={props.onChangeMemo}
          value={props.memo}
          placeholder="Memo"
        />
        <View>
          <TextInput
            style={styles.input}
            onChangeText={props.onChangeDate}
            value={props.date}
            placeholder="Hr"
          />
          <TextInput
          style={styles.input}
          onChangeText={props.onChangeMin}
          value={props.min}
          placeholder="Min"
        />
        </View>   
      </View>
      <View>
        <TouchableOpacity style={styles.createBtn} onPress={props.create} activeOpacity={0.8}>
          <Text style={styles.textWhite}>Create</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Component