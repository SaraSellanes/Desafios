import {View, StyleSheet,FlatList} from 'react-native'
const CustomList = ({
    itemListProp,
    renderListItemEvent,
    keyExtractorProp
}
) => {
    return(
      <View>
         <FlatList
            data={itemListProp}
            renderItem={renderListItemEvent}
            keyExtractor={keyExtractorProp}
            />
       </View>
    )
}
export default CustomList