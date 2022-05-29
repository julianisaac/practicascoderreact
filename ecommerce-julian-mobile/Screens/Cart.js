import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import { useContext, useState, useEffect} from 'react';
import { Carrito } from '../context/CartContext';
import ConfirmCompraModal from '../Components/ConfirmCompraModal';
import CartItem from '../Components/CartItem';
import globalStyle from '../Styles/Global';

const CartScreen = () => {

  const [total, setTotal] = useState(0);
  const {cart, sumaTotal, removeItem} = useContext(Carrito);
  const [modalVisible, setModalVisible] = useState(false)  

  const fnRender = ({ item }) => {
    return (
      <CartItem
        item={item}
        handleRemove={removeItem}
      />
    )
  }

  useEffect(() => {
    const sumaTotalProds = sumaTotal();
    setTotal(sumaTotalProds);
  }, [cart.cart])

  return (
    <View>
      {cart.length !== 0 ?
        <>
          <FlatList
            data={cart}
            keyExtractor={item => item.id}
            renderItem={fnRender}
          >
          </FlatList>
          <View>
            <Text>Total: {(total.toFixed(1))}</Text>
            <TouchableOpacity onPress={() => setModalVisible(true)} style={globalStyle.button}>
              <Text>Purchase</Text>
            </TouchableOpacity>
          </View>
        </>
        :
        <Text>No hay productos en el cart</Text>
      }
      <ConfirmCompraModal modalVisible={true}/>
    </View>
  )
}

export default CartScreen;

const styles = StyleSheet.create({})