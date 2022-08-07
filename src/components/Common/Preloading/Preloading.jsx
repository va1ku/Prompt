import preloader from '../../../images/loading-11.gif';
import styles from './Preloading.module.css';



const Preloading = () =>{
	return(
		<>
			<img src={preloader} alt="" className={styles.loading} />
		</>
	)
};


export default Preloading;

