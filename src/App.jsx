import Education from './components/education.jsx';
import Experience from './components/experience.jsx';
import Info from './components/info.jsx';
import './styles/main.css';

export default function App() {
    return (
        <div className="app-container">
            <Info />
            <Education />
            <Experience />
        </div>
    );
}