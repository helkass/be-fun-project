import "./product.css"
import productsList from "../../constants/products";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md"

const Products = () => {
    const handleOrder = (id) => {
        console.log(id);
    }
  return (
    <section className='product-section'>
        <main className='container'>
            <div className='product-container-slide flex'>
                <button className="product-btn-arrow"><MdArrowBackIosNew size={30}/></button>
                <div className='slides-container'>
                    {productsList.map(product => (
                    <div key={product.id} className='product-card'>
                        <p>{product.title}</p>
                        <span>{product.desc}</span>
                        <button className='about-btn-order btn-product-order' onClick={() => handleOrder(product.id)}>Order now</button>
                    </div>
                    ))}
                </div>
                <button className="product-btn-arrow"><MdArrowForwardIos size={30 }/></button>
            </div>
        </main>
    </section>
  )
}

export default Products