import { useDispatch, useSelector } from 'react-redux';
import{ Link} from 'react-router-dom';
import { useState } from 'react';




const ProductComponent = () => {
    const [quantity, setQuantity] = useState(1);
    const products = useSelector((state) => state.allProducts.products)


    const renderList = products.map((product) => {
        return (
            <div className='four wide column' key={product.id}>
                <Link to={`/product/${product.id}`}>
                <div className='ui link cards'>
                    <div className="card">
                     
                            <img  src={product.image} alt={product.title} height={300}  />
                        
                        <div className="content">
                            <div className="header">{product.title} </div>
                            <div className="meta price">$ {product.price}</div>
                            <div className="meta">$ {product.category}</div>
                        </div>
                    </div>

                </div>
                </Link>
            </div>
        )
    })
    return (
        <>{renderList}</>
  )
}

export default ProductComponent;