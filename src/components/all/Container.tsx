
const Container = ({children}:{children:React.ReactNode}) => {
  return (
    <div className="xl:px-32 lg:px-32 md:px-20 px-8">
      {children}
    </div>
  )
}

export default Container