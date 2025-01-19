import about from "../assets/about.jpeg"
import { ABOUT } from "../constants";

const About = () => {
    return (
        <>
    <section className="container mx-auto mb-8 py-16 px-4 lg:px-20" id="about">
        <h2 className="mb-8 text-center text-3xl tracking-tighter">About Us</h2>

        <div className="flex flex-col lg:flex-row justify-between items-center space-x-8">
            <div className="w-full lg:w-1/2 p-4">
                <img src={about} alt="about" className="rounded-3xl lg:rotate-3 w-full "/>
            </div>
            <div className="w-full lg:w-1/2 px-4">
                <h2 className="text-4xl tracking-tighter lg:text-6xl text-center">
                    {ABOUT.header}
                </h2>

                <p className="m-8 text-2xl leading-relaxed text-center tracking-tight lg:max-w-xl">
                    {ABOUT.content}
                </p>
            </div>
        </div>
    </section>
</>

    )
}

export default About;