import Project from '../components/Project';
import PianoPulse from '../assets/images/PianoPulse.jpeg';
import WeatherDashboard from '../assets/images/WeatherDashboard.jpeg';
import ReadMeGenerator from '../assets/images/ReadMeGenerator.jpg';
import UsingCars from '../assets/images/UsingCars.jpg';
import EmployeeDatabase from '../assets/images/EmployeeDatabase.jpg';

const Projects = [
    {
        title: 'PianoPulse - A Piano Learning App WebApp',
        imageUrl: PianoPulse,
        gitHubUrl: 'https://github.com/jankrajniak/firstProject',
        deployedUrl: null,
    },
    {
        title: 'Weather Dashboard WebApp',
        imageUrl: WeatherDashboard,
        gitHubUrl: 'https://github.com/jankrajniak/weatherDashboard',
        deployedUrl: 'https://weatherdashboard-d4ja.onrender.com/',
    },
    {
        title: 'Readme Generator CLI App',
        imageUrl: ReadMeGenerator,
        gitHubUrl: 'https://github.com/jankrajniak/readmeGenerator',
        deployedUrl: null,
    },
    {
        title: 'Using Cars CLI App',
        imageUrl: UsingCars,
        gitHubUrl: 'https://github.com/jankrajniak/usingCars',
        deployedUrl: null,
    },
    {
        title: 'Employee Database CLI App',
        imageUrl: EmployeeDatabase,
        gitHubUrl: 'https://github.com/jankrajniak/employeeDatabase',
        deployedUrl: null,
    }
]

export default function PortfolioPage() {
    return (
        <div className="container bg-gradient p-5">
            <h2 className="text-white">My Project Portfolio</h2>
            <div className='container d-flex flex-wrap justify-content-around p-5'>
                {Projects.map((project, index) => (
                    <Project key={index} project={project} />
                ))}
            </div>
        </div>
    );
};