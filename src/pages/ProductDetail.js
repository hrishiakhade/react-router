import { Link, useParams } from "react-router-dom";
function ProductDetailPage() {
    const { productId } = useParams();

    return <>
        <h1>Product Details Page</h1>
        <h2>This is Product {productId}</h2>
        <p><Link
            to=".."                      //* pop to root/parent/one level up screen */}
            relative="path"     // default is route , which means back will take you to one level up/parent level , having path will jusr remove last path
        >Back</Link></p>              
    </>
}


export default ProductDetailPage;