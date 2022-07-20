import React,{useEffect} from 'react'
import { View, Text } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

//Components
import Component from '@components/deskboard/Component'
import * as actionTask from '../store/action/task'

//Style
import styles from '@components/deskboard/Style'

const Deskboard = () => {
  const todoList = [
    { 
      id: 1,
      format: 'hr',
      date: 10, 
      memo: 'to Watch One Piece Wano Arc', 
      task: 'Watch Anime'
    },
    {
      id: 2,
      format: 'hr',
      date: 11, 
      memo: 'to Listen Anime Songs', 
      task: 'Listen Songs'
    },
    {
      id: 3,
      format: 'hr',
      date: 12, 
      memo: 'go to sleep', 
      task: 'Sleeping'
    },
    {
      id: 4,
      format: 'hr',
      date: 5, 
      memo: 'wake up and cleaning', 
      task: 'Wake Up'
    },
    {
      id: 5,
      format: 'hr',
      date: 7, 
      memo: 'take a breakfast', 
      task: 'Breakfast'
    },
    
  ]

  // console.log('Dashboard ----', todo)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actionTask.newTask(todoList));
  }, []);

  const todoData = useSelector(state => state.TodoList.todo)

  const deleteHandler = (value) => {
    dispatch(actionTask.deleteTask(value.id))
    // console.log('deleted', value)
  }
  
  return (
    <View style={styles.container}>
      <Component 
        data={todoData}
        delete={deleteHandler}
      />
    </View>
  )
}

export default Deskboard