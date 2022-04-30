import {StyleSheet} from 'react-native';

export const colors = {
    darkBlue: '#006d77'
}

export default StyleSheet.create({
    container: {
      marginTop: 50,
    },
    bigBlue: {
      color: 'blue',
      fontWeight: 'bold',
      fontSize: 30,
    },
    red: {
      color: 'red',
    },
    mainCardView: {
      height: 90,
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
      marginRight: 16,
    },
    subCardView: {
      height: 50,
      width: 50,
      borderRadius: 25,
      backgroundColor: 'white',
      borderColor: 'white',
      borderWidth: 1,
      borderStyle: 'solid',
      alignItems: 'center',
      justifyContent: 'center',
    },        
    textoCards: {
      fontSize: 14,
      color: "black",
      fontWeight: 'bold',
      textTransform: 'capitalize'
    },    
    textoCardsSmall: {
      fontSize: 11,
      color: "black",
      fontWeight: 'bold',
      textTransform: 'capitalize',
      width: '70%'
    }    
  });
  