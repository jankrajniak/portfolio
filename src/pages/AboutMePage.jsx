import ProfilePicture from "../assets/images/Profile_Picture.jpg";

export default function AboutMePage() {
    return (
        <div className="container bg-gradient p-5" style={{minHeight: "500px"}}>
            <h2 className="mb-3">About Me</h2>
            <img src={ProfilePicture} className="rounded-circle w-25 h-auto img-fluid mb-3" alt="Profile Picture" />
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus eius velit 
                omnis ratione dignissimos saepe, illum necessitatibus eveniet nulla consectetur 
                aliquam quasi esse alias porro in laudantium quos facilis dolores!
            </p>
        </div>
    )
}