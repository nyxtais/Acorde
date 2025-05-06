import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import Inicial from '../src/screens/Inicial';
import Integr from '../src/screens/Integr';
import Afeta from '../src/screens/Afeta';
import Acao from '../src/screens/Acao';
import Form from '../src/screens/Form'

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Inicío') iconName = 'home';
          else if (route.name === 'Integrantes') iconName = 'people';
          else if (route.name === 'Causa e Consequência') iconName = 'warning';
          else if (route.name === 'Ação') iconName = 'flash';
          else if (route.name === 'Formulário') iconName = 'document-text';

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#fff',
        tabBarInactiveTintColor: '#8c8c8c',
        tabBarStyle: {
          backgroundColor: '#523687',
          height: 65,
          paddingBottom: 5,
          paddingTop: 5,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: 'bold',
        },
      })}
    >
      <Tab.Screen name="Inicío" component={Inicial} />
      <Tab.Screen name="Integrantes" component={Integr} />
      <Tab.Screen name="Causa e Consequência" component={Afeta} />
      <Tab.Screen name="Ação" component={Acao} />
      <Tab.Screen name="Formulário" component={Form} />


    </Tab.Navigator>
  );
}
