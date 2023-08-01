import React from 'react';
import Header from './Header';
import Footer from './Footer';
import TodoList from './TodoList';
import './App.css';
import logo from './logo.svg';


const App =() => {
  return (
    <>
    <Header/>
    <TodoList/>
    <Footer/>
    </>
  );
}

export default App;
