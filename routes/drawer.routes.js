import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TabRoutes from './tab.routes';

import Integr from '../src/screens/Integr';
import Afeta from '../src/screens/Afeta';
import Acao from '../src/screens/Acao';
import Form from '../src/screens/Form'

const Drawer = createDrawerNavigator();

export default function DrawerRoutes() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#523687',
        },
        headerTintColor: '#fff',
        drawerStyle: {
          backgroundColor: '#bdbdbd',
          width: 200,
        },
        drawerActiveTintColor: '#523687',
        drawerInactiveTintColor: '#333',
      }}
    >
      <Drawer.Screen name="Inicío" component={TabRoutes} />
      <Drawer.Screen name="Integrantes" component={Integr} />
      <Drawer.Screen name="Causa e Consequência" component={Afeta} />
      <Drawer.Screen name="Ação" component={Acao} />
      <Drawer.Screen name="Formulário" component={Form} />
    </Drawer.Navigator>
  );
}
