import { StyleSheet, Text, View } from 'react-native'
import {useContext, useState} from 'react';
import ConfirmCompraModal from '../Components/ConfirmCompraModal';
import { Carrito } from '../context/CartContext';

const CartScreen = () => {

  const {cart} = useContext(Carrito);
  const [modalVisible, setModalVisible] = useState(false)  

  return (
    <View>
      {cart.length !== 0 ?
        <>
          <Text>Cart</Text>
          <FlatList
            data={cart}
            keyExtractor={item => item.id}
            renderItem={fnRender}
          >
          </FlatList>
          <View>
            <Text>Total: {(total.toFixed(1))}</Text>
            <TouchableOpacity onPress={() => setModalVisible(true)}>
              <Text>Purchase</Text>
            </TouchableOpacity>
          </View>
        </>
        :
        <Text>No hay productos en el cart</Text>
      }
      <ConfirmCompraModal/>
    </View>
  )
}

export default CartScreen;

const styles = StyleSheet.create({})