import React from 'react';
import { Modal, Text, View, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import {useState, useContext} from 'react';
import { colors } from '../Styles/colors';
import { Carrito } from '../context/CartContext';

const ConfirmCompraModal = () => {

  const {cart} = useContext(Carrito);

  const [modalVisible, setModalVisible] = useState(false);
  const [nombre, setNombre] = useState("");
  const [direccion, setDireccion] = useState("");
  const [loadingCheckout, setLoadingCheckout] = useState(false);
  const [checkoutText, setCheckoutText] = useState("");

  const handlePurchase = () => {
    // console.log("Se realizo la compra");
    // console.log(nombre, direccion);
    if (nombre === "" || direccion === "") {
      return
    }
    const orderGenerada = {
      buyer: {
        nombre: nombre,
        direccion: direccion
      },
      items: cart,
      total: total,
      createdAt: new Date().toLocaleString()
    }

    //Primer paso: abrir un batch
    const batch = writeBatch(db)//ver en qué level colocarlo

    //Array auxiliar que me define si hay productos fuera de stock
    const outOfStock = []

    //Chequear el stock del producto en nuestra db y restarlo a la cantidad, si corresponde
    value.cart.forEach((prod) => {
      setLoadingCheckout(true)
      getDoc(doc(db, 'productos', prod.id))
        .then((documentSnapshot) => {
          if (documentSnapshot.data().stock >= prod.quantity) {
            batch.update(doc(db, 'productos', documentSnapshot.id), {
              stock: documentSnapshot.data().stock - prod.quantity
            })
          } else {
            outOfStock.push({ id: documentSnapshot.id, ...documentSnapshot.data() })
          }
          console.log(outOfStock);

          if (outOfStock.length === 0) {
            addDoc(collection(db, 'ordenes'), orderGenerada).then(({ id }) => {
              batch.commit().then(() => {
                setCheckoutText(`Se genero la order con id:  + ${id}`)
              })
            }).catch((err) => {
              console.log(`Error: ${err.message}`);
              setCheckoutText(`Error: ${err.message}`)
            })
          } else {
            let mensaje = ''
            for (const producto of outOfStock) {
              mensaje += `${producto.name} `
            }
            setCheckoutText(`Productos fuera de stock: ${mensaje}`)
          }

          setLoadingCheckout(false)
        })
    })
  }

  return (
    <Modal
    animationType='slide'
    transparent={true}
    visible={modalVisible}
    onRequestClose={() => {
      setModalVisible(false)
    }}
  >
    <View style={styles.modalParent}>
      <View style={styles.modalContainer}>
        <TouchableOpacity onPress={() => setModalVisible(false)}>
          <Text>X</Text>
        </TouchableOpacity>
        <TextInput 
          placeholder='Ingresar nombre'
          onChangeText={setNombre}
          value={nombre}
        />
        <TextInput 
          placeholder='Ingresar direccion'
          onChangeText={setDireccion}
          value={direccion}
        />
        <Text>¿Quieres confirmar la compra?</Text>
        <TouchableOpacity onPress={() => setModalVisible(false)}>
          <Text>Cancelar</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handlePurchase}>
          <Text>Confirmar</Text>
        </TouchableOpacity>
        {loadingCheckout && <ActivityIndicator size={'small'} color={"green"}/>}
        {!loadingCheckout && <Text>{checkoutText}</Text>}
      </View>
    </View>
  </Modal>
)
}

const styles = StyleSheet.create({
    modalParent: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    modalContainer: {
      height: 500,
      width: 300,
      backgroundColor: colors.lightViolet,
    }
  });

export default ConfirmCompraModal;

