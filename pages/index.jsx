import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Navbar from '../components/Navbar';
import Market from '../components/Market';

export default function Home() {
  return (
    <>
      <Navbar />
      <Market />
    </>
  );
}
