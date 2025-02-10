import {motion} from 'framer-motion';
import { styles } from '../styles';
import { staggerContainer } from '../utils/motion';

const SectionWrapper = (Component, idName) => 
function HOC () {
 return(
    <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{once:true, amount:0.25}}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0 center`}
    >
        <span className="hash-span" id={idName}>
            
        </span>
        <Component />
    </motion.section>
 )
}

export default SectionWrapper

//removing the max-w-7xl seems to solve the issue but i also makes everything not centered