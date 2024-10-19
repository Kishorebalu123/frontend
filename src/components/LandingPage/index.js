
import Header from "../Header"
import FirstPage from "./FirstPage"
import SecondPage from "./SecondPage"
import ThirdPage from "./ThirdPage"
import FourthPage from "./FourthPage"
import FifthPage from "./FifthPage"
import SixthPage from "./SixthPage"
import SeventhPage from "./SeventhPage"

import './index.css'

const LandingPage=()=>{
 
 return (
 <div>
    <Header/>
   <div className="main-container">
   <FirstPage/>
   <SecondPage/>
   <ThirdPage/>
   <FourthPage/>
  <FifthPage/>
  <SixthPage/>
  <SeventhPage/>
    </div>
    </div>
 )
}
export default LandingPage