import Education from './components/Education.jsx';
import Experience from './components/Experience.jsx';
import Info from './components/Info.jsx';
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