import {Text, View, FlatList, TouchableOpacity, ActivityIndicator} from 'react-native';
import {useContext, useEffect, useState} from 'react';
import { obtenerDatos } from '../Services/fetch';
import globalStyle from '../Styles/Global';
import { Carrito } from '../context/CartContext';

const Productos = ({route, navigation}) => {

  const {productos} = useContext(Carrito);

  const {categoria} = route.params;
  
  const [productosFiltrados, setProductosFiltrados] = useState([])

  useEffect(()=> {

    (async ()=>{
      const productFilter = productos.filter(producto => producto.category === categoria)
      setProductosFiltrados(productFilter);
    })()

    console.log(productosFiltrados);

  }, [categoria])

  const handleProducto = (item) => {
    navigation.navigate('Detalle', {
      id: item.id,
      title: item.title,
      item: item 
    })
  }

  return (
    <View>
        {productosFiltrados.length > 0 ?           

        <FlatList
          data={productosFiltrados}
          renderItem={( {item} ) => { 
            return <TouchableOpacity onPress={() =>  handleProducto(item)} > 

              <View style={globalStyle.mainCardView}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Text style={globalStyle.textoCardsSmall} adjustsFontSizeToFit>{item.title}</Text>  
                </View>
              </View>
            
            </TouchableOpacity>
          }
        }
        keyExtractor={item => item.id.toString()}
        />
        :
        <ActivityIndicator size={'large'} color={'blue'} />
        }
</View>
  )
};

export default Productos;