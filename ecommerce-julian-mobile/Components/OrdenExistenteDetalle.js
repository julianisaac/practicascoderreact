import { useEffect, useContext, React} from 'react';
import { Carrito } from '../context/CartContext';
import { Text, View, FlatList, TouchableOpacity } from 'react-native';


const OrdenExistenteDetalle = (idOrden) => {

    const {ordenes} = useContext(Carrito);

    const [modalVisible, setModalVisible] = useState(false);

    const orden = useState();
  
    useEffect(()=> {

        (async ()=>{
          orden = ordenes.filter(orden => orden.id === idOrden)
        })()
    
    }, [idOrden])
    
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
            <View style={globalStyle.mainCardView}>
                <View style={{flex: 1, flexDirection: 'column'}}>
                    <Text style={globalStyle.textoCards}>Fecha: {orden.fechaCreacion}</Text>  
                    <Text style={globalStyle.textoCards}>Cantidad de articulos: {orden.articulos.length}</Text>  
                    <Text style={globalStyle.textoCards}>Importe: {orden.total}</Text>  

                    <FlatList
                        data={orden.articulos}
                        keyExtractor={item => item.id}
                        renderItem={( {item} ) => { 
                        return <TouchableOpacity> 
                            <View style={globalStyle.mainCardView}>
                                <View style={{flex: 1, flexDirection: 'column'}}>
                                    <Text style={globalStyle.textoCards}>Producto: {item.title}</Text>  
                                    <Text style={globalStyle.textoCards}>Precio: {item.price}</Text>  
                                </View>
                            </View>
                        </TouchableOpacity>
                        }
                    }
                    >
                    </FlatList>

                </View>
            </View>
          </View>
        </View>
      </Modal>
    )
}
    
export default OrdenExistenteDetalle;