import {View, Text, StyleSheet, FlatList} from 'react-native'
import products_data from '../data/products_data.json'
import ProductItem from '../components/ProductItem'
import Header from '../components/Header'
import { useState, useEffect } from 'react'
import Search from '../components/Search'

const ProductByCategoryScreen = ({category}) => {

  const [ProductsByCategory, setProductsByCategory] = useState([])
  const [search, setSearch] = useState ('')

  useEffect(()=>{
    const ProductsFilteredByCategory = products_data.filter(product=>product.category===category)
    const ProductsFiltered = ProductsFilteredByCategory.filter(
      product=>product.title.toLowerCase().includes(search.toLowerCase()))
    setProductsByCategory (ProductsFiltered)
  },[category, search])

    const renderProductItem = ({item})=> (
      <ProductItem product={item} />
    )
   
   const onSearch = (search) => {
       setSearch(search)
   }

   return(
      <>
      <Header title="Productos"/>
         <Search onSearchHandlerEvent = {onSearch}/>
         <FlatList
             data={ProductsByCategory}
             renderItem={renderProductItem}
             keyExtractor={item=>item.id}
         />

         </>
    )
}

export default ProductByCategoryScreen

const styles = StyleSheet.create({
    
})