import {ActivityIndicator} from 'react-native'
import CategoriesScreen from './src/screens/CategoriesScreen'
import ProductsByCategoryScreen from './src/screens/ProductsByCategoryScreen'
import { useFonts } from 'expo-font'
import { useState} from 'react'

export default function App() {
 const [categorySelected, setCategorySelected] = useState('')

console.log("Categoria seleccionada:", categorySelected)

const [fontLoaded] = useFonts({
  'Rubik-Regular': require ('./assets/fonts/Rubik-Regular.ttf'),
  'Rubik-Bold': require ('./assets/fonts/Rubik-Bold.ttf'),
})

  if (!fontLoaded) return <ActivityIndicator/>

const onSelectCategory = (category) => {
   setCategorySelected(category)
}
const onReturnHome =()=>{
  setCategorySelected("")
}

  return (
    <>
    {
      categorySelected
      ?
      <ProductsByCategoryScreen category={categorySelected} returnHomeHandlerEvent={onReturnHome}/>
      :
      <CategoriesScreen onSelectCategoryEvent={onSelectCategory}/>
     }
    </>
  );
}
