import React, { useEffect, useState } from 'react'
import { Alert, FlatList, Text, TextInput, TouchableOpacity, View } from 'react-native'

import { Header } from '../../components/Header'
import { styles } from './styles'

import Add from '../../assets/Add.svg'
import { Task } from '../../components/Task'
import { EmptyTasks } from '../../components/EmptyTasks'

type TaskProps = {
  details: string,
  isComplete: boolean,
}

export function Home() {
  const [taskDetails, setTaskDetails] = useState('')
  const [tasks, setTasks] = useState<TaskProps[]>([])
  const [completedTasks, setCompletedTasks] = useState(0)

  useEffect(()=>{
    const countTasks = tasks.reduce((count, task) => {
      if (task.isComplete) return count + 1
      return count
    }, 0);

    setCompletedTasks(countTasks)
  })

  function handleAddTask(){
    const task = {
      details: taskDetails,
      isComplete: false
    }

    setTasks((prevState) => [...prevState, task])
    setTaskDetails('')
  }

  function handleTaskRemove(details: string){
    setTasks((prevState) => 
      prevState.filter((task) => task.details !== details))
  }

  function handleTaskComplete(details: string) {
    setTasks((tasks) => tasks.map((task) =>
    task.details === details
      ? { ...task, isComplete: !task.isComplete }
      : task
  ))
  }

  return (
    <>
      <Header />

      <View style={styles.container}>
        <View style={styles.addTasks}>
          <TextInput
            style={styles.input}
            placeholder="Adicione uma nova tarefa"
            placeholderTextColor={'#808080'}
            onChangeText={setTaskDetails}
            value={taskDetails}
          />
          <TouchableOpacity style={styles.button} onPress={handleAddTask}>
            <Add />
          </TouchableOpacity>
        </View>

        <View style={styles.tasksInfo}>
          <View style={styles.infoType}>
            <Text style={styles.title}>Criadas</Text>
            <Text style={styles.quantity}>{tasks.length}</Text>
          </View>

          <View style={styles.infoType}>
            <Text style={[styles.title, {color: '#8284FA'}]}>Concluídas</Text>
            <Text style={styles.quantity}>{completedTasks}</Text>
          </View>
        </View>
        
        {tasks.length > 0 ? (
          <FlatList
          data={tasks}
          keyExtractor={(item) => item.details}
          renderItem={({ item }) => (
            <Task key={item.details} details={item.details} isComplete={item.isComplete} onRemove={() => handleTaskRemove(item.details)} onComplete={() => handleTaskComplete(item.details)}/>
          )}
        />
        ): (
          <EmptyTasks />
        )}
      </View>
    </>
  )
}
