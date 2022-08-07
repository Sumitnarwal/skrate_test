import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Navbar } from './components/navbar/Navbar'
import OverView from './components/Overview/OverView'
import axios from 'axios'

function App() {
  const [detail, setDeltails] = useState([])
  console.log(detail)
  useEffect(() => {
    gedData()
  }, []);

  const gedData = () => {
    axios({
      url: "https://mocki.io/v1/bb11aecd-ba61-44b9-9e2c-beabc442d818",
      method: "GET"
    }).then((res) => {
      setDeltails(res.data)
    })
  }
  return (
    <div className="App">
      <OverView detail={detail} />
    </div>
  )
}

export default App
