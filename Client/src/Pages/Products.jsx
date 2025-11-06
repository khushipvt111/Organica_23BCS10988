import React, { useEffect } from 'react'
import { Header } from '../Component/Header'
import { Footer } from '../Component/Footer'
import { ListProduct } from '../Component/HomeComponent/ListProduct'

export const Products = () => {
  useEffect(() => { window.scrollTo(0, 0) }, []);
  return (
    <>
      <Header/>
      <main>
        <ListProduct showSearch={true} showSorting={true}/>
      </main>
      <Footer/>
    </>
  )
}


