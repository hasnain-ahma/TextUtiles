import logo from './logo.svg';
import './App.css';



import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
import React,{useState} from 'react';



function App() {
const [mode, setmode] = useState('light');
const [alert, setalert] = useState(null);
const showAlert=(message,type)=>{
setalert({
  msg:message,
  type:type,
})
setTimeout(() => {
  setalert(null)
},2000);

}
const toggleMode =()=>{
  if(mode==='light')
 { setmode('dark');
document.body.style.backgroundColor='black';
showAlert('Dark Mode Is Enabled','Success');
document.title='Dark Mode is Enabled';
{/*setInterval(() => {
  document.title='Install Textutiles..'
}, 2000);
setInterval(() => {
  document.title= 'Textutiles is very good..'
}, 3000);*/}
}

else{
  setmode('light');
  document.body.style.backgroundColor='white';
  showAlert('Light Mode Is Enabled','Success');
  document.title='light Mode is Enabled';
}
}

  return (
    <>
     <Navbar mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
   
          <TextForm  mode={mode} showAlert={showAlert}/> 
           
</>
    
  
  );
}
export default App;
