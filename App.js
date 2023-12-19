import { StyleSheet, Text, View, TextInput, Button,} from 'react-native';
import { useState } from 'react'
import CustomModal from './Components/CustomItemModal'
import CustomInput from './Components/CustomItemInput'
import CustomList from './Components/CustomItemList'

export default function App() {
  const [textItem, setTextItem] = useState('')
  const [itemList, setItemList] = useState([])
  const [itemSelectedToDelete, setItemSelectedToDelete] = useState({})
  const [modalVisible, setModalVisible] = useState(false) 

  const onChangeTextHandler = (text) => {
    setTextItem(text)
  }
  
  function addItemToList() {
    setItemList(prevItemList => [...prevItemList, { id: Math.random().toString(), value: textItem }])
    console.log(itemList)
    setTextItem('')
  }

  const onSelectItemHandler = (id) => {
    setModalVisible(!modalVisible)
    setItemSelectedToDelete(itemList.find((item)=>item.id===id))
  }

  const onDeleteItemHandler = () => {
    setItemList(itemList.filter((item)=>item.id!==itemSelectedToDelete.id))
    setModalVisible(!modalVisible)
  }
  
  const renderListItem = ({item}) => (
    <View style={styles.itemList}>
      <Text>{item.value}</Text>
      <Button
        title="x"
        color="#F62B2F"
       onPress={()=>onSelectItemHandler(item.id)}  />
    </View>
  )
  
  return (
    <>
<View style={styles.container}>
  <CustomInput
    placeholderProp="Ingresar Tarea..."
    textItemProp={textItem}
    onChangeTextHandlerEvent={onChangeTextHandler}
    addItemToListEvent={addItemToList}
  />
     <CustomList
      itemListProp={itemList}
      renderListItemEvent={renderListItem}
      keyExtractorProp={item => item.id}
     />
  </View>
      <CustomModal
         animationTypeProp="slide"
         isVisibleProp={modalVisible}
         itemSelectedProp={itemSelectedToDelete}
         onDeleteItemHandlerEvent={onDeleteItemHandler}
         setModalVisibleEvent={setModalVisible}
  />
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E2D4B7',
    padding:30
  },
  itemList:{
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems:'center',
    padding:10,
    margin: 10,
    backgroundColor:"#62A787",
    borderRadius: 10,
    borderWidth: 2,
  },
});