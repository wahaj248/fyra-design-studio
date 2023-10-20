"use client"
import Image from 'next/image'
import styles from './page.module.css'
import Header from './../components/header/Header'
import Navbar from '@/components/Navbar/Navbar'
import Banner from '@/components/banner/Banner'
import Footer from '@/components/footer/Footer'
import Contactform from '@/components/contactform/Contactform'
import Marque from '@/components/marque/Marque'
import Icon from '@/components/icons/Icon'
import Process from '@/components/process/Process'
export default function Home() {
  return (
  <>
  <Header/>
  <Navbar/>
  <Banner/>
  <Process/>
  <Icon/>
  <Marque/>
  <Contactform/>
  <Footer/>
  </>
  
  
  )
}
