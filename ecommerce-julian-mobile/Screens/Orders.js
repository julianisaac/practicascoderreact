import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { Carrito } from '../context/CartContext';
import { useContext, React} from 'react';
import globalStyle from '../Styles/Global';

const Orders = () => {

  const {ordenes} = useContext(Carrito);  

  return (
    <View>
      {ordenes.length !== 0 ?
        <>
          <FlatList
            data={ordenes}
            keyExtractor={item => item.id}
            renderItem={( {item} ) => { 
              return <TouchableOpacity> 

                <View style={globalStyle.mainCardView}>
                  <View style={{flex: 1, flexDirection: 'column'}}>
                      <Text style={globalStyle.textoCards}>Fecha: {item.fechaCreacion}</Text>  
                      <Text style={globalStyle.textoCards}>Cantidad de articulos: {item.articulos.length}</Text>  
                      <Text style={globalStyle.textoCards}>Importe: {item.total}</Text>  
                      
                      {/* <View style={{flex: 1, flexDirection: 'row'}}>
                        <Text style={globalStyle.textoCards}>Producto      </Text>  
                        <Text style={globalStyle.textoCards}>Precio</Text>  
                      </View>
                      <FlatList
                        data={item.articulos}
                        keyExtractor={itemDetail => itemDetail.id}
                        renderItem={( {itemDetail} ) => { 
                        return <TouchableOpacity> 
                                <View style={{flex: 1, flexDirection: 'row'}}>                                    
                                    <Text style={globalStyle.textoCards}>1</Text>  
                                    <Text style={globalStyle.textoCards}>2</Text>  
                                </View>
                        </TouchableOpacity>
                        }
                      }
                      >
                      </FlatList>                      
                  */}
                  </View>
                </View>

              </TouchableOpacity>
            }
          }
          >
          </FlatList>
        </>
        :
        <Text>No hay ordenes cargadas</Text>
      }
    </View>
  )
}

export default Orders;

const styles = StyleSheet.create({})