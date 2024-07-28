import './AnimatedBar.css';

import Marquee from "react-fast-marquee";
function AnimatedBar() {

    


    return (
        <div className='body'>
            
                <Marquee pauseOnHover={true} speed={40}>
                   <div className='margin'>
                    <a href = "#"> Look at latest collection right now</a>
                   </div>
                   <div className='margin'>
                    <a href = "#">see here</a>
                   </div>
                   <div className='margin'>
                    <a href="#">go heree</a>
                   </div>
                </Marquee>
            
        </div>
    )
}

export default AnimatedBar