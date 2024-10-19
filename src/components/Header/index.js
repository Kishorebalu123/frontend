
import './index.css'
const Header =()=>{


    return(

         <div className="header-container" >
            <ul className="nav-items-left">
              <li className="nav-item-1">A I . G E N</li>
              <li className="nav-item-2">Features</li>
              <li className="nav-item-3">Roadmap</li>
              <li className="nav-item-4">Tokenomics</li>
            </ul>
            <div className="nav-items-right">
              <button className="whitepaper-button" type="button">Whitepaper</button>
              <button className="start-button" type="button">Get Started</button>
            </div>

       </div>
    )
}

export default Header