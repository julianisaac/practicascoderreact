import {Button, TextInput, View} from 'react-native';
import Item from '../Components/Item';
import globalStyle from '../Styles/Global';
import {colors} from '../Styles/Global';

const Layout = () => {
  return (
    <View style={globalStyle.container}>
        <Item/>
    </View>
  )
}

export default Layout;