import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Navbar } from './components/navbar/Navbar'
import OverView from './components/Overview/OverView'
import axios from 'axios'
import NewJobs from './components/newJobs/NewJobs'
import Sidebar from './components/sideBar/Sidebar'

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
    <div className='' >
      <Navbar detail={detail}/>
      <div className="App">
        <Sidebar />
        <OverView detail={detail} />
        <NewJobs detail={detail} />
      </div>
    </div>
  )
}

export default App
