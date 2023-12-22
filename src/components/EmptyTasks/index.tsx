import { Text, View } from 'react-native'

import { styles } from './styles'

import Clipboard from '../../assets/Clipboard.svg'

export function EmptyTasks() {
  return (
    <View style={styles.container}>
      <Clipboard />

      <Text style={styles.title}>Você ainda não tem tarefas cadastradas</Text>

      <Text style={styles.text}>
        Crie tarefas e organize seus itens a fazer
      </Text>
    </View>
  )
}
