import React from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import HistoryList from './HistoryList/HistoryList';
import Form from './Form/Form';

export default function App() {
  return (
    <>
      <Header />
      <HistoryList history={[{}]}/>
      <Form method={{}}/>
      <Footer />
    </>
  );

}
