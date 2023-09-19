import './style.css';
import MyButton from '../../Common/Button';
import gradient from '../../../assets/gradient.png'
import iphone from '../../../assets/iphone.png' 
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';

const Main = () =>{
    function handleShare(){
        navigator.share({
            title: 'Crypto Tracker App',
            url: '',
          })
            .then(() => {
              console.log('Share successful');
            })
            .catch((error) => {
              console.error('Share failed:', error);
            });
    }
    return (
        <>
        <div className='main'>
            <div className='left'>
                <motion.h1 className='track-crypto'
                    initial={{x:150}}
                    animate={{x:0}}
                    transition={{duration:2}}
                >
                    Track Crypto
                </motion.h1>
                <motion.h1 className='real-time'
                  initial={{x:150}}
                  animate={{x:0}}
                  transition={{duration:2}}
                >Real Time</motion.h1>
                <motion.p className='p'
                initial={{y:100}}
                animate={{y:0}}
                transition={{duration:1.5}}
                >Track crypto through a public api in real time. Visit the dashboard to do so!</motion.p>
                <motion.div className='btnDiv'
                initial={{y:100}}
                animate={{y:0}}
                transition={{duration:1.5}}
                >
                <NavLink to="/dashboard">
                    <MyButton text="Dashboard" onClick={()=>console.log("clicked")} outlined={true}/>
                </NavLink>
                <MyButton text="Share" onClick={handleShare} outlined={true}/>
                </motion.div>
            </div>
            <div className='right'>
                <img 
                src={gradient} alt="" className='gimg'
                />
                <motion.img src={iphone} alt="" className='ipimg'
                  initial={{y:-15}}
                  animate={{y:15}}
                  transition={{
                      type:"smooth",
                      repeatType:'mirror',
                      duration:2,
                      repeat:Infinity,
                  }}/>
            </div>
        </div>

        </>
    )
}

export default Main;