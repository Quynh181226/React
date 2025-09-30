import { useState } from "react";
import CardForm from "./components/CardForm";
import CardItem from "./components/CardItem";

// import Ex1 from "../src/pages/Ex1";
// import Ex2 from "../src/pages/Ex2";

export interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    image: string;
}

export default function App() {
  const [products, setProducts] = useState<Product[]>([]);

  const handleAddProduct = (product: Product) => {
    const newProduct = { ...product, id: Date.now() };
    setProducts([...products, newProduct]);
  };

  const handleDeleteProduct = (id: number) => {
    setProducts(products.filter((product) => product.id !== id));
  };

return (
      <div className="min-h-screen bg-gray-100 p-6">
        <h1 className="text-2xl font-bold mb-4">Quản lý sản phẩm</h1>

        <CardForm onAdd={handleAddProduct}/>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          {products.map((item) => (
              <CardItem key={item.id} product={item} onDelete={() => handleDeleteProduct(item.id)}/>
          ))}
        </div>
      </div>
      // <>
      //    <Ex1/>
      //    <Ex2/>
      // </>
  );
}