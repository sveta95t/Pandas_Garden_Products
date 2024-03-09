import React from 'react';
import styles from './styles.module.css';
import { useDispatch } from 'react-redux';
import { sortByValueAction } from '../../../store/reducers/productsReducer';


function ProductsFilter() {

  const dispatch = useDispatch()

  const handleSortChange = (e) => {
    dispatch(sortByValueAction(e.target.value));
  };

  const handleDiscountFilterChange = (e) => {
   // setFilterByDiscount(e.target.checked);
  };

  const handlePriceRangeChange = (e) => {
    const { name, value } = e.target;
//    setFilterByPriceRange(prevRange => ({ ...prevRange, [name]: value }));
  };

    return (
        <div className={styles.filtered_Products}>
            <div>
                <label> Price</label>
                <input
                    type="number"
                    name="min"
                    placeholder="from"
             //       onChange={handlePriceRangeChange} 
                /> 
            </div>
            <input
                type="number"
                name="max"
                placeholder="to"
             //   onChange={handlePriceRangeChange}
            />
            <div>
                <label>Discounted items </label>
                <input type="checkbox"
                    className={styles.checkbox}
              //      checked={filterByDiscount}
             //       placeholderonChange={handleDiscountFilterChange}
                />
            </div>
            <label>Sorted</label>
            <select onChange={handleSortChange}>
                <option value="default">by default</option>
                <option value="newest">newest</option>
                <option value="price-high-low">price: high-low</option>
                <option value="price-low-high">price: low-high</option>
            </select>
        </div>
    )
}

export default ProductsFilter;