import {View, Text, StyleSheet, Pressable} from 'react-native'
import {colors} from '../global/colors'
import { FontAwesome } from '@expo/vector-icons'


const Header = ({ title, returnHomeHandlerEvent }) => {
     return(
      <View style={styles.headerContainer}>
          <Text style={styles.headerTitle}>{title}</Text>
        <Pressable onPress={returnHomeHandlerEvent}>
          <FontAwesome name="home" size={24} color="black" />
        </Pressable>      
     </View>
    )
}

export default Header

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection:'row',
        height:100,
        justifyContent:'space-between',
        alignItems:'flex-end',
        backgroundColor: colors.primary,
        paddingHorizontal: 20,
        paddingBottom:10,
    },
headerTitle:{
       color:'#fff',
       fontFamily: 'Rubik-Regular'
    }
})