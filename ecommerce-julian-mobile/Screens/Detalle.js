import {Text, View, Image, StyleSheet} from 'react-native';
import globalStyle from '../Styles/Global';

const Detalle = ({route}) => {

  const {item} = route.params;

  return (
    <View >
      <View >
        <Image
                  source={item.image}
                  resizeMode="contain"
                  style={{
                    height: 300,
                    width: 300,
                  }}
                />
        <Text style={globalStyle.textoCards}>{item.description}</Text>
      </View>
 
      <View style={styles.container}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={globalStyle.textoCards}>Price: USD {item.price}</Text>  
        </View>
      </View>


    </View>
  )
};

export default Detalle;

const styles = StyleSheet.create({
  container: {
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'mintcream',
    borderRadius: 15,
    shadowColor: 'white',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 1,
    shadowRadius: 8,
    elevation: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 16,
    paddingRight: 14,
    marginTop: 6,
    marginBottom: 6,
    marginLeft: 16,
    marginRight: 16,  },
  title: {
    marginTop: 16,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: "#20232a",
    borderRadius: 6,
    backgroundColor: "#61dafb",
    color: "#20232a",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold"
  }
});