import Resume from '../assets/20241230_General_Resume.pdf';

export default function ResumePage() {
    return (
        <div>
            <p>You can download a copy of my resume by clicking the link below:</p>
            <a href={Resume} download="Jan_Krajniak_Resume.pdf" className="btn btn-primary">Download Resume</a>
        </div>
    );
};