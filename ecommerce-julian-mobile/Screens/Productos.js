import {Text, View, FlatList, TouchableOpacity, ActivityIndicator} from 'react-native';
import {useEffect, useState} from 'react';
import { obtenerDatos } from '../Services/fetch';
import globalStyle from '../Styles/Global';

const Productos = ({route, navigation}) => {
  const {categoria} = route.params;
  
  const [productos, setProductos] = useState([]);

  const handleProducto = (item) => {
    navigation.navigate('Detalle', {
      id: item.id,
      title: item.title,
      item: item 
    })
  }

  useEffect(() => {
    ( async ()=> {
      setProductos(await obtenerDatos(`https://fakestoreapi.com/products/category/${categoria}`));
    })()    
  },[])

  return (
    <View>
        {productos.length > 0 ?           

        <FlatList
          data={productos}
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