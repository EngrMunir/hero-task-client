import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '../../hook/useAxiosSecure';
import ProductCard from './ProductCard';

const Products = () => {
    const axiosPublic= useAxiosPublic();

    const { data: products=[] }= useQuery({
        queryKey:['product'],
        queryFn: async()=>{
            const res = await axiosPublic.get('/products');
            return res.data;
        }
    })
    
    return (
        <div>
            <h2>Products:{products.length}</h2>
            {
                products.map(product => <ProductCard key={product._id} product={product}></ProductCard> )
            }
        </div>
    );
};

export default Products;