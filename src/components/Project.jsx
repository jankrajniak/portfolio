
import GitHub from '../assets/images/github-mark.png';

export default function Project({project}) {
    return (
        <div className = "card " style={{backgroundImage: `url(${project.imageUrl})`}}>
            <div className = "card-body">
                <h3 className = "card-title">{project.title}</h3>
                <a 
                    href={`${project.gitHubUrl}`} 
                    target ="_blank"
                    rel= "noreferrer noopener">
                        <img 
                            src={GitHub}   
                            alt='GitHub Logo' 
                            style={{width: '50px', height: '50px'}}
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