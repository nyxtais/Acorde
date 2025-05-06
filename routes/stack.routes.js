import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Inicial from '../src/screens/Inicial';
import Integr from '../src/screens/Integr';
import Form from '../src/screens/Form';

const Stack = createNativeStackNavigator();

export default function StackRoutes() {
    return (
    <Stack.Navigator initialRouteName="Inicial">
        <Stack.Screen name="Inicío" component={Inicial} />
        <Stack.Screen name="Integrantes" component={Integr} />
        <Stack.Screen name="Formulário" component={Form} />
    </Stack.Navigator>
);
}