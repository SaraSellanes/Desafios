import {View, TextInput, Button, StyleSheet} from 'react-native'

const CustomInput = (
    {
       placeholderProp,
       textItemProp,
       onChangeTextHandlerEvent,
       addItemToListEvent
    }
) => {
    return(
    <View style={styles.InputContainer}>
        <TextInput style={styles.textInput} 
        placeholder={placeholderProp}
        onChangeText={onChangeTextHandlerEvent}
        value={textItemProp}
        />
        <Button
            title="Agregar"
            color="#62A787"
            onPress={addItemToListEvent} 
        />
      </View>
    )
}

export default CustomInput

const styles = StyleSheet.create({
    InputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'
      },
      textInput: {
        width:200,
        borderBottomColor:"#30323D",
        borderBottomWidth: 2,
      },
})