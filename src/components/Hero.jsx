import video from "../assets/hero.mp4"
import hero from "../assets/hero.jpg"
const Hero = () => {
    return(
        <>
        <section className="relative flex h-screen items-center justify-center">

            <div className="absolute inset-0 -z-20 h-full w-full overflow-hidden">
                <video src={video} className="h-full w-full object-cover" muted autoPlay loop playsInline poster={hero}></video>
            </div>

            <div className="absolute inset-0 -z-10 bg-gradient-to-b  from-transparent from-50% to-black"></div>

            <div className="relative z-20 flex h-screen flex-col justify-end pb-5">
                <p className="font-samarkan w-full p-4 text-7xl md:text-9xl lg:text-[13rem] text-gray-50">Desi Grill</p>
                <p className="text-gray-100 w-full mx-auto flex justify-center">Texas</p>
            </div>

        </section>
        </> 
    )
}

export default Hero;