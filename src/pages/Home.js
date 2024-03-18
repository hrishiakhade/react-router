import { Link, useNavigate } from "react-router-dom";


function HomePage() {
    const navigate = useNavigate();

    // setTimeout(() => {           // navigate programmaticaly
    //     navigate('/products');
    // }, 5000);

    return <>
        <h1>HomePage</h1>
        {/* <a href="/products">Go to Product Page</a> */}
        <Link to={"products"} >Go to Product Page</Link>
    </>
}

export default HomePage; 