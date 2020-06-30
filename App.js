import React from 'react';
import { Home } from './app/views/Home.js';
import { Contact } from './app/views/Contact.js';
import { StackNavigator } from 'react-navigation';

import { Register } from './app/views/Register.js';
import { Login } from './app/views/Login.js';

import { Quiz } from './app/views/Quiz.js';
import { Finish } from './app/views/QuizFinish.js';

import { About } from './app/views/About.js';

const MyRoutes = StackNavigator({
  HomeRT: {
    screen: Home
  },
  ContactRT: {
    screen: Contact
  },
  RegisterRT: {
    screen: Register
  },
  LoginRT: {
    screen: Login
  },
  QuizRT: {
    screen: Quiz
  },
  FinishRT: {	
    screen: Finish
  },
  AboutRT: {	
    screen: About
 }
},
  {
    initialRouteName: 'HomeRT'
  }
);

export default class App extends React.Component {
  render() {
    return (
      <MyRoutes /> 
    );
  }
}


