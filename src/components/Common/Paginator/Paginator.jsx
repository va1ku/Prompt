import Preloading from "../Preloading/Preloading";
import classes from './Paginator.module.css'
import { useState } from 'react';

const UsersNavbar = ({ itemsCountPage, totalItemsCount, PageActive, isLoading, portionSize = 10, onPageChanged }) => {

	const pageCount = Math.ceil(totalItemsCount / itemsCountPage);
	const pages = []
	for (let i = 1; i <= pageCount; i++) {
		pages.push(i)
	}

	const portionCount = Math.ceil(pageCount / portionSize);
	let [portion, portionUpdate] = useState(1);
	const leftBorder = (portion - 1) * portionSize + 1;
	const rightBorder = portion * portionSize;



	return (
		<div className={classes.nuvWrapper}>
			<div>
				{portion > 1 &&
					<button className={classes.button}
					onClick={() => { portionUpdate(portion - 1) }}> back </button>}	
				{pages
					.filter((i) => i >= leftBorder && i <= rightBorder )
					.map((page) => {
						return <span key={page} 
						onClick={() => {onPageChanged(itemsCountPage, page)}} 
						className={PageActive === page ? ` ${classes.page}  ${classes.active} ` : classes.page}>
						{page}</span>
					})}

				{portionCount > portion &&
					<button className={classes.button}
					 onClick={() => { portionUpdate(portion + 1) }}> next </button>
				}
				{isLoading ? <Preloading /> : null}
			</div>
		</div>
	)
}



export default UsersNavbar;