import React from 'react'
import { View } from 'react-native'

import { styles } from './styles'

import Logo from '../../assets/Logo.svg'

export function Header() {
  return (
    <View style={styles.container}>
      <Logo />
    </View>
  )
}
