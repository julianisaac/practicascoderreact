import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from 'react'
import Orders from '../../Screens/Orders';

const OrdersStack = () => {

  const Stack = createNativeStackNavigator();

  return (
          <Stack.Navigator>
            <Stack.Screen name="OrdersStack" component={Orders} options={{ title: "Orders"}} />
          </Stack.Navigator>
  )  
}

export default OrdersStack;