import {Text, View, FlatList, TouchableOpacity, ActivityIndicator} from 'react-native';
import {useEffect, useState} from 'react';
import { obtenerDatos } from '../Services/fetch';
import globalStyle from '../Styles/Global';


const Categorias = ({navigation}) => {

  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    ( async ()=> {
      setCategorias(await obtenerDatos('https://fakestoreapi.com/products/categories'));
    })()    
  },[])
  
  const handleCategory = (categoriaId) => {
    navigation.navigate('Productos', {
      categoria: categoriaId
    })
  }


  return (
    <View>

        {categorias.length > 0 ?           

          <FlatList
            data={categorias}
            renderItem={( {item} ) => { 
              return <TouchableOpacity onPress={() =>  handleCategory(item)} > 

                <View style={globalStyle.mainCardView}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <Text style={globalStyle.textoCards}>{item}</Text>  
                  </View>
                </View>

              </TouchableOpacity>
            }
          }
          keyExtractor={item => item.toString()}
          />
          :
          <ActivityIndicator size={'large'} color={'blue'} />
        }
    </View>
  )
};

export default Categorias;

