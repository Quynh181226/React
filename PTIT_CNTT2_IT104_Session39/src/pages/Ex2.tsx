import {type ChangeEvent, useState} from "react";
import axios from "axios";

interface ImageData {
    url: string;
    public_id: string;
}

export const Ex2=() => {
    const [file, setFile] = useState<File | null>(null);
    const [images, setImages] = useState<ImageData[]>([]);

    const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFile(e.target.files[0]);
        }
    };

    const handleUpload = async () => {
        if (!file) return alert("Invalid");

        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", "React_Ra");

        try {
            const res = await axios.post("https://api.cloudinary.com/v1_1/dtxlzevgb/image/upload", formData);

            const newImg = {
                url: res.data.secure_url,
                public_id: res.data.public_id,
            };

            setImages((prev) => [...prev, newImg]);
            setFile(null);
        } catch (err) {
            console.error("Upload failed:", err);
        }
    };

    return (
        <div>

            <input type="file" onChange={handleInput} />
            <button onClick={handleUpload}>Upload</button>

            <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
                {images.map((img) => (
                    <div key={img.public_id} style={{ position: "relative" }}>
                        <img src={img.url} alt="uploaded" width="150" />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Ex2