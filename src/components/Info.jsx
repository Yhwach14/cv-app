import { useState } from "react";

export default function Info() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const [isEditing, setIsEditing] = useState(true);

    if (!isEditing) {
        return (
            <div className="info ">
                <h2>Personal Information</h2>
                <p>Name: {name}</p>
                <p>Email: {email}</p>
                <p>Phone: {phone}</p>
                <button onClick={() => setIsEditing(true)}>Edit</button>
            </div>
        );
    }

    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            setIsEditing(false);
        }} className="info">

        <h2>Personal Information</h2>
        <label htmlFor="name">Full Name:</label>
        <input
            type="text"
            name="name"
            id="name"
            required placeholder="First and last name"
            value={name}
            onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="email">Email Address:</label>
        <input
            type="email"
            name="email"
            id="email"
            required placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="phone">Phone Number:</label>
        <input
            type="tel"
            name="phone"
            id="phone"
            required placeholder="Your phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
        />
        <button type="submit">Save</button>
        </form>
    )
}