import React, {useState} from "react";
import classes from "./Pagination.module.css";

const Pagination = (props) => {

    let countPage = Math.ceil(props.countUsers / props.countUsersPage);
    let pages = [];
    for (let i = 1; i <= countPage; i++) {
        pages.push(i);
    }
    let portionSize = 10;

    let portionCount = Math.ceil(countPage/portionSize);
    let [numberPortion, setNumberPortion] = useState(1);
    let leftNumberPagePortion = (numberPortion - 1) * portionSize + 1;
    let rightNumberPagePortion = numberPortion * portionSize;



    return (
        <div>
            {numberPortion > 1 && <button onClick={()=>{setNumberPortion(numberPortion-1)}}>back</button>}
            {pages
                .filter(p => p>= leftNumberPagePortion && p<=rightNumberPagePortion)
                .map(p => {
                return <span key={p}
                             className={p === props.currentPage ? classes.activePage : null}
                             onClick={(event) => {
                                 props.onClickNumberPage(p);
                             }}>{p}</span>
                }
            )}
            {numberPortion < portionCount && <button onClick={() => {setNumberPortion(numberPortion+1)}}>next</button>}
        </div>
    )

}

export default Pagination;