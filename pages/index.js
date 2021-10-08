import styles from './style.module.css';
import Contatos from "./contato.js";

function Home() {
    return (
      <div className={styles.page}>
          <header className={styles.header}>
            <p>
                {"Lagoa Prateada"}
            </p>
        </header>

        <main className={styles.main}>
            <nav>
              <ul>
                <li><a href="#">Página inicial</a></li>
                <li><a href="#">Sobre</a></li>
                <li><a href="#">Contato</a></li>
              </ul>
            </nav>
            <section>
                <menu>
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
