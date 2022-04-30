import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Categorias from "../../Screens/Categorias";
import Detalle from "../../Screens/Detalle";
import Productos from "../../Screens/Productos";

const ShopStack = () => {

    const Stack = createNativeStackNavigator();

    return (
            <Stack.Navigator initialRouteName="Categorias">            
                <Stack.Screen name="Categorias" component={Categorias} options={{title: "Categorias"}} />
                <Stack.Screen name="Productos" component={Productos} options={({route}) => ({title: route.params.categoria})} />
                <Stack.Screen name="Detalle" component={Detalle} options={({route}) => ({title: route.params.title})} />
            </Stack.Navigator>
    );
}

export default ShopStack;