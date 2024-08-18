import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const ProductCard = ({ product }) => {
    const { productName, productImage, description, price, category, ratings, createdAt, brand } = product;

    return (
        <Card sx={{ maxWidth: 345 }} className='mt-5'>
            <CardMedia
                sx={{ height: 140 }}
                image={productImage}
                title={productName}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {productName}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
                <div className='flex justify-evenly'>
                    <Typography variant="body2" component="span">Price: {price} Tk</Typography>
                    <Typography variant="body2" component="span">Category: {category}</Typography>
                </div>
                <div className='flex justify-evenly'>
                    <Typography variant="body2" component="span">Rating: {ratings}</Typography>
                    <Typography variant="body2" component="span">{createdAt}</Typography>
                </div>
                <div className='flex justify-evenly'>
                    <Typography variant="body2" component="span">Brand: {brand}</Typography>
                </div>
            </CardContent>
        </Card>
    );
};

export default ProductCard;
