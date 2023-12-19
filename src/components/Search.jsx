import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

const Search = ({onSearchHandlerEvent}) => {

      const [searchInput, setSearchInput] = useState('')

    return(
        <View style={styles.searchContainer}>   
        <TextInput
                style={styles.textInput}
                onChangeText={setSearchInput}
                placeholder='Buscar...'
                value={searchInput}
            />
           
           <TouchableOpacity onPress={()=>onSearchHandlerEvent(searchInput)}>
                <Ionicons name="ios-search" size={24} color="black" />
           </TouchableOpacity>

           <TouchableOpacity onPress={null}>
                <MaterialIcons name="cancel" size={24} color="black" />
           </TouchableOpacity>
        </View>
   )
}

export default Search

const styles = StyleSheet.create({
    searchContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding:10,
    },
    textInput:{
        width:'80%'
    }
})