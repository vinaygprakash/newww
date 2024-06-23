import React from 'react'
import img from "/cart.png"
import { Link } from 'react-router-dom'
const Hero = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <section className="bg-blue-100 w-full flex-grow">
                <div className="container mx-auto flex px-5 py-12 md:flex-row flex-col items-center h-full">
                    <div className="lg:flex-grow md:w-1/2 flex flex-col md:items-start md:text-left items-center text-center h-full justify-center">
                        <h1 className="title-font sm:text-5xl text-4xl mb-4 font-bold text-gray-900">
                            Welcome to Shop Cart
                        </h1>
                        <p className="mb-8 leading-relaxed text-gray-700">
                            Discover Shop Cart, your ultimate destination for premium products ranging from fashion to electronics. Explore a curated selection that combines style and functionality, designed to enhance your lifestyle.
                        </p>
                        <p className="mb-8 leading-relaxed text-gray-700">
                            Enjoy exclusive deals and free shipping on orders over $50. Our user-friendly platform ensures a seamless shopping experience with secure payment options, guaranteeing peace of mind with every purchase.
                        </p>
                        <p className="mb-8 leading-relaxed text-gray-700">
                            Join our community of satisfied customers and stay updated with the latest arrivals and special offers. Subscribe to our newsletter and embark on a journey where quality meets convenience at Shop Cart.
                        </p>
                        <div className="flex justify-center gap-4">
                            <Link to={"/cart"} className="btn-cart text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg">
                                Cart
                            </Link>
                            <Link to={"/products"} className="btn-products text-white bg-green-500 hover:bg-green-600 px-4 py-2 rounded-lg">
                                Products
                            </Link>
                        </div>
                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <img className="object-cover object-center rounded" alt="hero" src={img} />
                    </div>
                </div>
            </section>
            <footer className="bg-gray-800 text-white w-full">
                <div className="max-w-6xl mx-auto px-4 py-6 flex justify-between items-center">
                    <span className="text-sm text-gray-300 sm:text-center">© 2023 <a href="https://yourwebsite.com" className="hover:underline" target="_blank" rel="noopener noreferrer">Your Website</a>. All Rights Reserved.</span>
                    <p className="text-right text-sm text-gray-300">Developed By <a href="https://vinayprakash.com" className="underline text-blue-300 hover:text-blue-400" target="_blank" rel="noopener noreferrer">Vinay Prakash</a></p>
                </div>
            </footer>
        </div>
    );
    
    
}

export default Hero