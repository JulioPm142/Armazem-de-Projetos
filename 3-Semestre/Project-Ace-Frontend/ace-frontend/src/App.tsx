
import React from 'react';
import './App.css';
import BotaoAvancar from './components/botaoAvan';
import FormCadCom2 from './components/formCad2';
import LoginADM from './pages/login';
import Header from './components/header';
import CadADM from './pages/cadADM';
import CadCLI from './pages/cadCLI'
import CtrFIN from './pages/ctrFIN';
import CtrFIN2 from './pages/ctrFIN2';
import CtrFIN3 from './pages/ctrFIN3';
import AppRoutes from './Router';




function App() {
  return (
    <>
      {/* <LoginADM /> */}
      {/* <CadADM /> */}
      {/* <CadCLI/> */}
      {/* <CtrFIN/> */}
      {/* <CtrFIN2 /> */}
      {/* <CtrFIN3 /> */}
      <AppRoutes />
    </>
  );
}

export default App;
