import ProductCard from './ProductCard';
import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import './products.css';

const Products = () => {
    const { count = 0 } = useLoaderData();
    const [currentPage, setCurrentPage] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const numberOfPages = Math.max(1, Math.ceil(count / itemsPerPage));
    const [products, setProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [sortOption, setSortOption] = useState('');
    const [brand, setBrand] = useState('');
    const [category, setCategory] = useState('');
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const [loading, setLoading] = useState(true);

    const handleItemsPerPage = (e) => {
        const val = parseInt(e.target.value, 10);
        if (val > 0) { // Ensure positive itemsPerPage
            setItemsPerPage(val);
            setCurrentPage(0);
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < pages.length - 1) {
            setCurrentPage(currentPage + 1);
        }
    };

    const pages = [...Array(numberOfPages).keys()];

    useEffect(() => {
        fetch(`http://localhost:5000/products?page=${currentPage}&size=${itemsPerPage}&search=${searchTerm}&sort=${sortOption}&brand=${brand}&category=${category}&minPrice=${minPrice}&maxPrice=${maxPrice}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setProducts(data);
                setLoading(false);
            });
    }, [currentPage, itemsPerPage, searchTerm, sortOption, brand, category, minPrice, maxPrice]);

    if (loading) {
        return <p>Loading.......</p>;
    }

    return (
        <div className='mt-5'>
            <input
                className='border-5'
                type="text"
                placeholder="Search by Products name"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <select value={brand} onChange={(e) => setBrand(e.target.value)}>
                <option value="">Select Brand</option>
                <option value="Samsung">Samsung</option>
                <option value="Navana">Navana</option>
                <option value="Nokia">Nokia</option>
                <option value="Hp">Hp</option>
            </select>
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="">Select Category</option>
                <option value="Electronics">Electronics</option>
                <option value="Appliances">Appliances</option>
                <option value="Accessories">Accessories</option>
            </select>
            <input
                type="number"
                placeholder="Min Price"
                value={minPrice}
                onChange={(e) => {
                    const value = parseFloat(e.target.value);
                    setMinPrice(isNaN(value) ? "" : value);
                }}
            />
            <input
                type="number"
                placeholder="Max Price"
                value={maxPrice}
                onChange={(e) => {
                    const value = parseFloat(e.target.value);
                    setMaxPrice(isNaN(value) ? "" : value);
                }}
            />
            <select value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
                <option value="" disabled>Sort by</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="date-desc">Date Added: Newest first</option>
                <option value="date-asc">Date Added: Oldest first</option>
            </select>
            <h2>Products: {count}</h2>
            <div className='grid grid-cols-1 md:grid-cols-3'>
                {products.map((product) => <ProductCard key={product._id} product={product}></ProductCard>)}
            </div>
            <div className='pagination'>
                <p>Current page: {currentPage}</p>
                <button onClick={handlePrevPage}>Prev</button>
                {pages.map((page) => (
                    <button
                        className={currentPage === page ? 'selected' : undefined}
                        onClick={() => setCurrentPage(page)}
                        key={page}
                    >
                        {page}
                    </button>
                ))}
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
