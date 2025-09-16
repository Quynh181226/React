import axios from "axios";
import { useEffect, useState } from "react";
type ProductType = {
  id: number;
  product_name: string;
  image: string;
  price: number;
  quantity: number;
  created_at: string;
};
export const Ex2 = () => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const fetchData = async () => {
    try {
      const res = await axios.get("http://localhost:8080/products")
      setProducts(res.data)
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <h2>Danh sach san pham</h2>
       <table style={{ border: "1px solid black", textAlign:"center",borderCollapse: "collapse", width: "100%" }}>
        <thead>
          <tr>
            <th style={{ border: "1px solid black", padding: "5px" }}>ID</th>
            <th style={{ border: "1px solid black", padding: "5px" }}>Tên sản phẩm</th>
            <th style={{ border: "1px solid black", padding: "5px" }}>Ảnh</th>
            <th style={{ border: "1px solid black", padding: "5px" }}>Giá</th>
            <th style={{ border: "1px solid black", padding: "5px" }}>Số lượng</th>
            <th style={{ border: "1px solid black", padding: "5px" }}>Ngày tạo</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p.id}>
              <td style={{ border: "1px solid black", padding: "5px" }}>{p.id}</td>
              <td style={{ border: "1px solid black", padding: "5px" }}>{p.product_name}</td>
              <td style={{ border: "1px solid black", padding: "5px" }}>
                <img src={p.image} alt={p.product_name} width={80} />
              </td>
              <td style={{ border: "1px solid black", padding: "5px" }}>{p.price}</td>
              <td style={{ border: "1px solid black", padding: "5px" }}>{p.quantity}</td>
              <td style={{ border: "1px solid black", padding: "5px" }}>{p.created_at}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
