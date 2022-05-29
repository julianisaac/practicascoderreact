import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import globalStyle from '../Styles/Global';

const CartItem = ({item, handleRemove}) => {

  return (
    <View style={globalStyle.mainCardView}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Text style={globalStyle.textoCardsSmall} adjustsFontSizeToFit>{item.title}</Text>
        <Text style={globalStyle.textoCardsSmall} adjustsFontSizeToFit>qty: {item.quantity}</Text>
        <Text style={globalStyle.textoCardsSmall} adjustsFontSizeToFit>total: ${item.price * item.quantity}</Text>
        <TouchableOpacity onPress={()=> handleRemove(item)}>
          <Text>Eliminar</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default CartItem;

const styles = StyleSheet.create({});