import React from 'react';
import * as rtl from "react-testing-library";
import 'jest-dom/extend-expect';
import App from './App';
import DisplayData from "./components/DisplayData"
import Navbar from "./components/Navbar"

it('renders div containing DisplayData component', () => {
 const wrapper = rtl.render(
   <App />
 );
 console.log(wrapper);
});
