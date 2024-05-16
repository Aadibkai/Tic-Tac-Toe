import React, { useState } from "react";
import './Text.css';

export default function TextArea() {
    const [Limit, setLimit] = useState("");

    const handleChange = (e) => {
        // Here we are checking if the length is equal to 100
        if (e.target.value.length === 100) {
            alert(" exceed 100 characters")
        }
        setLimit(e.target.value);
    }

    return (
        <div className="Container">
            <label>
                <h1>Write Here</h1>
            </label>
            <div className="TextArea">
            <textarea
                name="Content"
                value={Limit}
                onChange={handleChange}
            />
            </div>
        </div>
    )
}w