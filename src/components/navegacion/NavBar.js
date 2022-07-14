import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';

const navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item">
                                {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
                                <Link className='nav-link' to='/'>Inicio</Link>

                            </li>
                            <li className="nav-item">
                                <Link className='nav-link' to='ofertas'>Ofertas</Link>
                            </li>
                            <li className="nav-item">
                                <Link className='nav-link' to='contacto'>Contacto</Link>
                            </li>
                        </ul>
                    </div>
                    <Link to='/'>
                        {/* <img src='./cart.svg' width='30' /> */}
                        <CartWidget />
                    </Link>
                </div>
            </nav>
        </div>
    );
};

export default navbar;
