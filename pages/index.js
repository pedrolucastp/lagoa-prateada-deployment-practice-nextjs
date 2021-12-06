import React from 'react';
import styles from './style.module.css';
import Contatos from "./contato.js";
import Unidades from "./unidades.js";

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
              {Unidades()}
        </main>
        
        <footer className={styles.footer}>
                {Contatos()}
        </footer>
      </div>    
    )
}
export default Home;
