import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section className="hero">
            <h2>L.M.J</h2>
            <h3>Hoy Es Tu Dia Para Brillar <br />Nosotros Te Ayudamos</h3>
            <Link className="btn" to="/jollas">Toda La Jolleria</Link>
        </section>
    )
}

export default Hero
