import { useState,type FormEvent, type ChangeEvent} from "react";

export const Ex6_GenderForm= () => {
    const [gender, setGender] = useState<string>("")

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setGender(e.target.value)
    }

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        alert(`Sex your choice is: ${gender}`);
    }

    return (
        <form onSubmit={handleSubmit}>
            <p>Choice sex</p>

            <label>
                <input type="radio" name="gender" value="Nam" checked={gender === "Nam"} onChange={handleChange}/>
                Male
            </label>
            <br />

            <label>
                <input type="radio" name="gender" value="Nữ" checked={gender === "Nữ"} onChange={handleChange}/>
                Female
            </label>
            <br/>

            <label>
                <input type="radio" name="gender" value="Khác" checked={gender === "Khác"} onChange={handleChange}/>
                #
            </label>
            <br/>

            <button type="submit">Submit</button>
        </form>
    )
}