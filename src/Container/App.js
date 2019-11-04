import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import HistoryList from '../components/HistoryList/HistoryList';
import Form from '../components/Form/Form';
import BodyDisplay from '../components/BodyDisplay/bodyDisplay';

export default function App() {
  return (
    <>
      <Header />
      <HistoryList history={[{}]}/>
      <Form method={{}}/>
      <BodyDisplay response={'Test Response'}/>
      <Footer />
    </>
  );

}
