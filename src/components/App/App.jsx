import {Outlet} from 'react-router-dom';
import { Header } from '../Header/Header';
import React from 'react';
import './index.css'

export const App = () => (
  <>
    <Header/>
    <Outlet />
  </>
);
