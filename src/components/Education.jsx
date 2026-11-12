import { useState } from 'react';

export default function Education() {
  const [school, setSchool] = useState('');
  const [degree, setDegree] = useState('');
  const [graduationYear, setGraduationYear] = useState('');

  const [isEditing, setIsEditing] = useState(true);

  if (!isEditing) {
    return (
      <div className="education">
        <h2>Education</h2>
        <p>School name: {school}</p>
        <p>Degree: {degree}</p>
        <p>Graduation Year: {graduationYear}</p>
        <button onClick={() => setIsEditing(true)}>Edit</button>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setIsEditing(false);
      }}
      className="education"
    >
      <label htmlFor="school">School:</label>
      <input
        type="text"
        name="school"
        id="school"
        required
        placeholder="School name"
        value={school}
        onChange={(e) => setSchool(e.target.value)}
      />
      <label htmlFor="degree">Degree:</label>
      <input
        type="text"
        name="degree"
        id="degree"
        required
        placeholder="Degree earned"
        value={degree}
        onChange={(e) => setDegree(e.target.value)}
      />
      <label htmlFor="graduationYear">Graduation Year:</label>
      <input
        type="text"
        inputMode="numeric"
        pattern="[0-9]*"
        name="graduationYear"
        id="graduationYear"
        required
        placeholder="Year of graduation"
        value={graduationYear}
        onChange={(e) => setGraduationYear(e.target.value)}
      />
      <button type="submit">Save</button>
    </form>
  );
}
