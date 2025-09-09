import { Card, Button } from "antd";
const { Meta } = Card;
 export const Ex3=()=>{
     return (
         <div className="flex flex-row gap-4 mt-5">
             <Card style={{ width: 300, borderRadius: 5}} cover={
                     <img src="https://cdn2.fptshop.com.vn/unsafe/360x0/filters:format(webp):quality(75)/macbook_air_13_m4_2025_xanh_1_16309323fd.jpg"/>
             }>
                 <Meta title="MacBook Air 2018" description="The reason I am selling the machine is because it is too much power for what I need"/>
                 <div className="mt-4 flex justify-between items-center">
                     <Button type="primary">Xem chi tiết</Button>
                     <span className="font-semibold">30.000.000 đ</span>
                 </div>
             </Card>

             <Card style={{ width: 300 }} cover={
                     <img src="https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/44/342024/macbook-air-13-inch-m4-16gb-256gb-sac-70w-thumb1-638903386914459770-600x600.jpg"/>
             }>
                 <Meta title="MacBook Pro 2019" description="The reason I am selling the machine is because it is too much power for what I need."/>
                 <div className="mt-4 flex justify-between items-center">
                     <Button type="primary">Xem chi tiết</Button>
                     <span className="font-semibold">30.000.000 đ</span>
                 </div>
             </Card>
         </div>
     )
 }