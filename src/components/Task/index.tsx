import React from 'react'

import { Text, View } from 'react-native'

import { styles } from './styles'

import Completed from '../../assets/Completed.svg'
import Circle from '../../assets/Circle.svg'
import Trash from '../../assets/Trash.svg'

type Props = {
  details: string
  isComplete: boolean
  onRemove: ()=> void
  onComplete: ()=> void
}

export function Task({ details, isComplete, onRemove, onComplete }: Props) {
  return (
    <View style={styles.container}>
      {isComplete ? (<Completed onPress={onComplete}/>) : (<Circle onPress={onComplete}/>)}
      <Text style={[styles.taskDetails, isComplete && styles.taskCompleted]}> {details} </Text>
      <Trash height={18} width={18} onPress={onRemove}/>
    </View>
  )
}
