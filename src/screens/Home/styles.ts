import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',

    paddingHorizontal: 24,

    backgroundColor: '#1A1A1A',
  },
  addTasks: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,

    height: 54,

    marginTop: -27,
  },
  input: {
    flex: 1,

    padding: 16,
    alignItems: 'center',
    gap: 8,

    fontSize: 16,
    color: '#FFF',

    borderRadius: 6,
    borderColor: '#0D0D0D',
    borderWidth: 1,
    borderStyle: 'solid',

    backgroundColor: '#262626',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',

    height: 52,
    width: 52,

    borderRadius: 6,

    backgroundColor: '#1E6F9F',
  },
  tasksInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',

    width: '100%',

    marginTop: 32,
    marginBottom: 20,
  },
  infoType: {
    flexDirection: 'row',
    alignItems: 'center',

    gap: 10,
  },
  title: {
    color: '#4EA8DE',
    fontSize: 14,
    fontWeight: 'bold',
  },
  quantity: {
    color: '#D9D9D9',
    fontSize: 12,
    fontWeight: 'bold',

    paddingVertical: 2,
    paddingHorizontal: 8,

    backgroundColor: '#333',

    borderRadius: 999,
  },
})
