const DishCard = ({project}) => {
    return (
        <>
        <div>
            <img 
            src={project.image}
            alt={project.title}
            className="rounded-3xl p-2 w-full h-60 object-cover transition-transform duration-300 transform hover:scale-105 cursor-pointer"  />

            <div className="p-4">
                <h3 className="mb-2 text-2xl font-bold tracking-tighter">
                    {project.title}
                </h3>
                <p className="text-sm">
                    {project.description}
                </p>
            </div>
        </div>
        </>
    )
}

export default DishCard;