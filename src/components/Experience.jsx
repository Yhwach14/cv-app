import { useState } from "react";

export default function Experience() {
    const [jobTitle, setJobTitle] = useState("");
    const [company, setCompany] = useState("");
    const [duration, setDuration] = useState("");
    const [description, setDescription] = useState("");

    const [isEditing, setIsEditing] = useState(true);
    
    if (!isEditing) {
        return (
            <div className="experience">
                <h2>Experience</h2>
                <p>Job Title: {jobTitle}</p>
                <p>Company: {company}</p>
                <p>Duration: {duration}</p>
                <p>Description: {description}</p>
                <button onClick={() => setIsEditing(true)}>Edit</button>
            </div>
        );
    }

    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            setIsEditing(false);
        }} className="experience">
            <h2>Experience</h2>
            <label htmlFor="jobTitle">Job Title:</label>
            <input
                type="text"
                name="jobTitle"
                id="jobTitle"
                required
                placeholder="Your job title"
                value={jobTitle}
                onChange={(e) => setJobTitle(e.target.value)}
            />
            <label htmlFor="company">Company:</label>
            <input
                type="text"
                name="company"
                id="company"
                required
                placeholder="Company name"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
            />
            <label htmlFor="duration">Duration:</label>
            <input
                type="text"
                name="duration"
                id="duration"
                required
                placeholder="Duration"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
            />
            <label htmlFor="description">Description:</label>
            <textarea
                name="description"
                id="description"
                required
                placeholder="Description of your role and responsibilities"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <button type="submit">Save</button>
        </form>
    );
}