import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',

    marginBottom: 8,
    padding: 12,
    gap: 8,

    minWidth: '100%',
    minHeight: 64,

    backgroundColor: '#262626',

    borderRadius: 8,
    borderColor: '#333',
    borderWidth: 1,
  },
  taskDetails: {
    flex: 1,

    color: '#F2F2F2',
    fontSize: 14,
  },
  taskCompleted: {
    color: '#808080',
    textDecorationLine: 'line-through'
  }
})
