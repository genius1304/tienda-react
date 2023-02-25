
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import Navbar from "./Components/Navbar/Navbar";
import ProductCard from "./Components/ProductCard/ProductCard";

function App() {
  return (
    <div>
      <Navbar />
      <ItemListContainer greeting={"Tu Mundo Gamer"} />
      <ProductCard title={"Celulares"} price={200} isRed={false} />
      <ProductCard title={"Gaming"} price={500} isRed={true} />
      <ProductCard title={"monitores"} isRed={true} />
    </div>
  );
}

export default App;
