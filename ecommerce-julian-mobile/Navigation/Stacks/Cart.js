import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from 'react'
import Cart from '../../Screens/Cart';

const CartStack = () => {

    const Stack = createNativeStackNavigator();

  return (
          <Stack.Navigator>
            <Stack.Screen name="CartScreen" component={Cart} options={{ title: "Cart"}} />
          </Stack.Navigator>
  )

  
}

export default CartStack;