import React from 'react'
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProducts } from '../store/actions/productsActions';
import { Link } from 'react-router-dom'
import ProductCard from '../Components/ProductCard';

function AllSales() {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products.products);
    const error = useSelector((state) => state.error);
  
    useEffect(() => {
      dispatch(getProducts());
    }, []);
  
  
    if (error) {
      return <h1>{error}</h1>;
    }

  return (
    <div>
        <div>
            {products.filter((item) => {
                if(products.discont_price) {
                    return item;
                }
            }).map(item => <ProductCard product={item.discont_price}/>)}
        </div>
    </div>
  )
}


// const boards = this.state.boards.filter((board)=>{
//     if(this.state.search == null)
//         return board
//     else if(board.title.toLowerCase().includes(this.state.search.toLowerCase()) || board.content.toLowerCase().includes(this.state.search.toLowerCase())){
//         return board
//     }
//   }).map(board=>{
//     return(
//         <tr key = {board.idx}>
//         <td> {board.idx} </td>
//         <td><button  className="btn btn-link" onClick = {() => this.BoardDetail(board.idx)}> {board.title}</button></td>
//         <td> {board.insertTime} </td>
//         <td> {board.updateTime} </td>
//         <td> {board.viewCnt} </td>
//     </tr>
//     )
//     })

export default AllSales