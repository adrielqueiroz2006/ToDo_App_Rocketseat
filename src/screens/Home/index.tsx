import React, { useState } from 'react'
import { FlatList, Text, TextInput, TouchableOpacity, View } from 'react-native'

import { Header } from '../../components/Header'
import { styles } from './styles'

import Add from '../../assets/Add.svg'
import { Task } from '../../components/Task'
import { EmptyTasks } from '../../components/EmptyTasks'

export function Home() {
  const tasks = [{
    details:'Teste Incompelta',
    isComplete: false
  }, 
  {
    details:'Teste Completa', 
    isComplete: true
  }]

  return (
    <>
      <Header />

      <View style={styles.container}>
        <View style={styles.addTasks}>
          <TextInput
            style={styles.input}
            placeholder="Adicione uma nova tarefa"
            placeholderTextColor={'#808080'}
          />
          <TouchableOpacity style={styles.button}>
            <Add />
          </TouchableOpacity>
        </View>

        <View style={styles.tasksInfo}>
          <View style={styles.infoType}>
            <Text style={styles.title}>Criadas</Text>
            <Text style={styles.quantity}>0</Text>
          </View>

          <View style={styles.infoType}>
            <Text style={[styles.title, {color: '#8284FA'}]}>Concluídas</Text>
            <Text style={styles.quantity}>0</Text>
          </View>
        </View>
        
        {tasks.length > 0 ? (
          <FlatList
          data={tasks}
          keyExtractor={(item) => item.details}
          renderItem={({ item }) => (
            <Task key={item.details} details={item.details} isComplete={item.isComplete}/>
          )}
        />
        ): (
          <EmptyTasks />
        )}
        
      </View>
    </>
  )
}
