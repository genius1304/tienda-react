import styles from "./Navbar.module.css";

// IMPORTAR IMAGEN DE SRC
import image1 from "../../images/descarga.jfif"
import CartWidget from "../CartWidget/CartWidget";

const Navbar = () => {
  return (
    <div className={styles.containerNavbar}>
      <img
        src={image1} 
        alt=""
        
      />

      <ul className={styles.containerList}>
        <li>Nuestros Locales</li>
        <li>Quienes Somos</li>
        <li>Contacto</li>
      </ul>
      <CartWidget />
    </div>
  );
};

export default Navbar;
