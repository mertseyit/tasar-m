
const Section = ({children, title, desc}:{children:React.ReactNode, title:string, desc?:string}) => {
  return (
      <div className="mt-32 mb-52">
        <h2 className="text-4xl text-center font-semibold pb-5 ">{title}</h2>
        <p className="text-center w-full block mt-5 mb-10 xl:text-lg lg:text-lg md:text-md text-sm text-primary">{desc}</p>
        {children}
      </div>
  )
}

export default Section