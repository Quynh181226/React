import { useState } from "react";
import axios from "axios";

export const Ex1 = () => {
    const [file, setFile] = useState<File | null>(null)
    const [img, setImg] = useState("");

    const handelUpload = async () => {
        if(!file){
            alert("Invalid")
            return;
        }

        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", "React_Ra")

        try{
            const response = await axios.post("https://api.cloudinary.com/v1_1/dtxlzevgb/image/upload", formData);

            console.log(response)
            if(response.status == 200){
                setImg(response.data.secure_url);
            }
        } catch (error) {
            console.log("error" + error)
        }
    }
    return(
        <div>
            <input type={"file"} onChange={(e) => setFile(e.target.files?.[0] || null)}  />
            <button onClick={handelUpload}>UpLoad</button>
            <img src={img} width="150"/>
        </div>
    )
}

export default Ex1