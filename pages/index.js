import React from 'react';
import ReactDOM from 'react-dom'
import styles from './style.module.css';
import Contatos from "./contato.js";
import Unidades from "./unidades.js";
import casa from 'pages/img/casa.jpg';

function Home() {
    return (
      <div className={styles.page}>
          <header className={styles.header}>
            <h1>
                Lagoa Prateada
            </h1>
            <nav>
              <ul>
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Unidades</a></li>
                <li><a href="#">Contato</a></li>
              </ul>
            </nav>
        </header>

        <main className={styles.main}>
            <section>
                <menu>
                  {Unidades()}
                  <img src={casa} alt="Minha Figura" />
                </menu>
            </section>
        </main>
        
        <footer className={styles.footer}>
            <span>
                {Contatos()}
            </span>
        </footer>
      </div>    
    )
}
export default Home;
