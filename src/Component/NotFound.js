import React from 'react'
import { Link } from 'react-router-dom';


const NotFound = () => {
    return (

    <div className="container d-flex flex-column align-items-center justify-content-center">
    <div className="text-center" style={{ maxWidth: '600px', margin: 'auto' }}>
    <div className="bg-white p-4">
        <img src="/images/404.png" alt="404 Not Found" className="img-fluid mb-4" style={{ maxWidth: '100%' }}
    />
    <div className="bg-light p-5"> 
        <h1 className='text-center m-4 p-4 px-3 align-center justify-Content-center'>
            404 Not Found
            </h1>
        <p className='text-center'>
            The page you are looking for does not exist or has been moved.</p>
        <p className='text-center'>
            Please check the URL or return to the homepage. 
        </p>
        <p className="text-center">
            <Link to="/home" className="btn">Go to Homepage</Link>  
        </p>
    </div>  
    </div>
    </div>
    </div>
    )
}

export default NotFound;
