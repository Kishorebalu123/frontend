import { GoArrowRight } from "react-icons/go";

import './index.css'


const SeventhPage=()=>{


    return(

        <div className="slide7">
            <div className="slide7-top">
           <h1>Get Started</h1>
           <div><GoArrowRight className="arrow" /></div>
            </div>
            <div className="slide7-bottom">
                <p>
                   Dash dash terraUSD neo uniswap kadena helium avalanche polymath bancor.
                </p>
                <div className="slide7-bottom-right">
                    <p>Looking for help?</p>
                   <div className="request">
                    <input placeholder="Enter your Email" />
                    <button>Submit</button>
                   </div>
                </div>
            </div>
        </div>
    )
}

export default SeventhPage