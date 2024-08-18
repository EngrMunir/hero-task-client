import ProductCard from './ProductCard';
import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import './products.css';
const Products = () => {
    const { count } = useLoaderData();
    const [currentPage, setCurrentPage] =useState(0);
    const [itemsPerPage, setItemsPerPAge]= useState(10);
    const numberOfPages =  Math.ceil(count / itemsPerPage);
    const [products, setProducts]=useState([]);
    const [searchTerm, setSearchTerm]= useState('')
    const [sortOption, setSortOption] = useState('date-desc');

    const handleItemsPerPage = e =>{
        console.log(e.target.value);
        const val = parseInt(e.target.value);
        setItemsPerPAge(val);
        setCurrentPage(0);
    }

    const handlePrevPage =()=>{
        if(currentPage>0){
            setCurrentPage(currentPage-1)
        }
    }

    const handleNextPage=()=>{
        if(currentPage <pages.length-1){
            setCurrentPage(currentPage+1)
        }
    }
    
    const pages = [...Array(numberOfPages).keys()];

    useEffect(()=>{
        fetch(`http://localhost:5000/products?page=${currentPage}&size=${itemsPerPage}&search=${searchTerm}&sort=${sortOption}`)
        .then(res =>res.json())
        .then(data =>setProducts(data))
    },[currentPage,itemsPerPage, searchTerm, sortOption])
    

    return (
        <div>
              <input
                    className='border-5'
                    type="text"
                    placeholder="Search by Products name"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <select value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
                    <option value="price-asc">Price: Low to High</option>
                    <option value="price-desc">Price: High to Low</option>
                    <option value="date-desc">Date Added: Newest first</option>
                    <option value="date-asc">Date Added: Oldest first</option>
                </select>
            <h2>Products:{count}</h2>
            <div className='grid grid-cols-1 md:grid-cols-3'>
            {
                products.map(product => <ProductCard key={product._id} product={product}></ProductCard> )
            }
            </div>
            <div className='pagination'>
                <p>Current page:{currentPage}</p>
                <button onClick={handlePrevPage}>Prev</button>
                {
                    pages.map(page => <button 
                        className={ currentPage ===page ? 'selected':undefined}
                        onClick={()=>setCurrentPage(page)}
                        key={page}>{page}</button>)
                }
                <button onClick={handleNextPage}>Next</button>
                <select value={itemsPerPage} onChange={handleItemsPerPage}>
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="50">50</option>
                </select>
            </div>
        </div>
    );
};

export default Products;