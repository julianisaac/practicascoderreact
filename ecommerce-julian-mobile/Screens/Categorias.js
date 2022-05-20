import {Text, View, FlatList, TouchableOpacity, ActivityIndicator} from 'react-native';
import {useContext} from 'react';
import globalStyle from '../Styles/Global';
import { Carrito } from '../context/CartContext';


const Categorias = ({navigation}) => {

  const {categorias} = useContext(Carrito);
  
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
              return <TouchableOpacity onPress={() =>  handleCategory(item.categoria)} > 

                <View style={globalStyle.mainCardView}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <Text style={globalStyle.textoCards}>{item.categoria}</Text>  
                  </View>
                </View>

              </TouchableOpacity>
            }
          }
          keyExtractor={item => item.id}
          />
          :
          <ActivityIndicator size={'large'} color={'blue'} />
        }
    </View>
  )
};

export default Categorias;

