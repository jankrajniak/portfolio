
import GitHub from '../assets/images/github-mark-white.png';

export default function Project({project}) {
    return (
        <div className = "card mb-5 bg-secondary text-center" style={{width: '450px', height: '500px'}}>
            <div className="card-header">
                <h4 className="card-title text-white">{project.title}</h4>
            </div>
            <div className = "card-body d-flex flex-column justify-content-end" style={{backgroundImage: `url(${project.imageUrl})`, height: '400px'}}>
                
            </div>
            <div className='card-footer d-flex flex-column'>
            <a 
                    href={`${project.gitHubUrl}`} 
                    target ="_blank"
                    rel= "noreferrer noopener">
                        <img 
                            src={GitHub}   
                            alt='GitHub Logo' 
                            style={{width: '75px', height: '75px'}}
                            className="mb-1"
                        />
                </a>
                {project.deployedUrl ? 
                (<a
                    href={`${project.deployedUrl}`}
                    target = "_blank"
                    rel= "noreferrer noopener"
                    className = "btn btn-primary"
                    >
                    Go To Deployed Page
                </a>) : (
                    <p className="text-muted">No deployed page available for this project</p>
                )}    
            </div>
        </div>
    )
}