import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

//Components
import Component from '../components/create/Component'
import * as actionTask from '../store/action/task'
//Style
import styles from '../components/create/Style'

const Create = ({navigation}) => {
  const [task, setTask] = useState();
  const [memo, setMemo] = useState();
  const [date, setDate] = useState(new Date());
  const [min, setMin] = useState();

  const dispatch = useDispatch();

  const createHandler = () =>{
    let todoData = {
      id: 1,
      format: 'hr',
      task: task,
      memo: memo,
      date: date,
    };
    dispatch(actionTask.newTask(todoData));
    navigation.navigate('Deskboard');
  }
  return (
    <View style={styles.container}>
      <Component 
        task={task}
        onChangeTask={value => setTask(value)}
        memo={memo}
        onChangeMemo={value => setMemo(value)}
        date={date}
        onChangeDate={value => setDate(value)}
        min={min}
        onChangeMin={value => setMin(value)}
        create={()=> createHandler()}
      />

    </View>
  )
}

export default Create