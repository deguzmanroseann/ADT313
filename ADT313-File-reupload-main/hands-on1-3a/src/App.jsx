import logo from './logo.svg';
import './App.css';

import Name from './component/Name/Name';
import Section from './component/Section/Section';
import Description from './component/Description/Description';

function App() {
  const userInfo = {
    fname : 'Rose Ann',
    lname : 'De Guzman',
    Section : 'BSIT-3A',
    Description: 'I am a 3rd year BSIT Student from DYCI'
  }
  return(
    <div className='App'>
      <Name fname={userInfo.fname}lname={userInfo.lname}/>
      <Section Section={userInfo.Section}/>
      <Description Desc={userInfo.Description}/>

    </div>
  )
}

export default App;