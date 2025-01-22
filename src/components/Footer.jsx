import GitHub from '../assets/images/github-mark-white.png';
import LinkedIn from '../assets/images/LinkedIn-Blue-128@2x.png';

export default function Footer() {
    return (
        <footer className="bg-dark">
            <div className="container d-flex justify-content-center">
                <a 
                    href='https://github.com/jankrajniak'
                    target ="_blank"
                    rel= "noreferrer noopener">
                        <img 
                            src={GitHub}   
                            alt='GitHub Logo' 
                            style={{width: '50px', height: '50px'}}
                            className="m-3"
                        />
                </a>
                <a 
                    href='https://www.linkedin.com/in/jan-krajniak/'
                    target ="_blank"
                    rel= "noreferrer noopener">
                        <img 
                            src={LinkedIn}   
                            alt='GitHub Logo' 
                            style={{width: '200px', height: '50px'}}
                            className="m-3"
                        />
                </a>
            </div>
            <div className="container text-white text-center">
                <p>Copyright Jan Krajniak 2025</p>
            </div>
        </footer>
    )
}