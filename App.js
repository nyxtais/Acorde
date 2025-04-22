import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Inicial from "./src/Telas/Inicial";
import Integr from "./src/Telas/Integr";
import Afeta from "./src/Telas/Afeta";
import Acao from "./src/Telas/Acao";
import Form from "./src/Telas/Form";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#523687",
          },
          headerTintColor: "#fff",
          drawerStyle: {
            backgroundColor: "#bdbdbd",
            width: 200,
          },
          drawerActiveTintColor: "#523687",
          drawerInactiveTintColor: "#333",
        }}
      >
        <Drawer.Screen name="Inicial" component={Inicial} />
        <Drawer.Screen name="Integrantes" component={Integr} />
        <Drawer.Screen name="Causa e Consequência" component={Afeta} />
        <Drawer.Screen name="Ação" component={Acao} />
        <Drawer.Screen name="Formulário" component={Form} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
