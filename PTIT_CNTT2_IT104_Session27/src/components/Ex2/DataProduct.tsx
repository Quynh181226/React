export interface Product {
    id: number
    name: string
    price: number
    description: string
}

export const products: Product[] = [
    { id: 1, name: "iPhone 15 Pro", price: 28990000, description: "Điện thoại Apple cao cấp, chip A17 Pro." },
    { id: 2, name: "Samsung Galaxy S24 Ultra", price: 25990000, description: "Màn hình Dynamic AMOLED 2X, camera 200MP." },
    { id: 3, name: "Xiaomi 14 Pro", price: 18990000, description: "Hiệu năng mạnh mẽ, sạc nhanh 120W." },
    { id: 4, name: "Oppo Find X6", price: 16990000, description: "Thiết kế đẹp, camera Hasselblad." },
    { id: 5, name: "Vivo X100", price: 15990000, description: "Chụp ảnh ban đêm xuất sắc, hiệu năng cao." },
    { id: 6, name: "Asus ROG Phone 8", price: 20990000, description: "Điện thoại gaming, pin trâu, màn hình 165Hz." },
]