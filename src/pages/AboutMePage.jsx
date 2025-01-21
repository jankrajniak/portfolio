import ProfilePicture from "../assets/images/Profile_Picture.jpg";

export default function AboutMePage() {
    return (
        <div className="container bg-gradient p-5 mb-3" style={{minHeight: "500px"}}>
            <h2 className="mb-3 text-white">About Me</h2>
            <img src={ProfilePicture} className="rounded-circle w-25 h-auto img-fluid mb-3" alt="Profile Picture" />
            <p className="text-white">Hello!
                My name is Jan Krajniak and I am a full-stack web developer. I will be adding
                more to the bio soon!
            </p>
        </div>
    )
}