import image from '../../public/images/home-page-image.jpg'
import Container from '../components/all/Container'
import OurServices from './OurServices'
import About from './About'
import OurTeams from './OurTeams'
import PricingPolicy from './PricingPolicy'
import { useNavigate } from 'react-router-dom'
const Home = () => {
  const navigate = useNavigate()
  return (
    <>
      <Container>
        {/* first screen */}
        <div className="grid grid-cols-5 gap-10 items-center lg:mt-10 md:mt-15 mt-32 justify-center">
          <div className="order-1 xl:col-span-3 lg:col-span-3 md:col-span-3 col-span-5">
            <img src={image} alt="Image" className='w-full h-auto' />
          </div>
          <div className="order-2 xl:col-span-2 lg:col-span-2 md:col-span-2 col-span-5 flex justify-center xl:items-start lg:items-start md:items-start items-center h-full w-full flex-col ">
            <h1 className='xl:text-7xl lg:text-7xl md:text-5xl sm:text-4xl text-3xl font-extrabold mb-6 text-primary'><span className='text-violet-500'>C</span>loud <span className='text-violet-500'>W</span>eb <span className='text-violet-500'>D</span>esing</h1>
            <p className='lg:text-left md:text-left text-center font-semibold xl:text-xl lg:text-lg md:text-md text-sm text-secondary p-1'>ReactJS-based customizable websites service for businesses</p>
            <div className='flex xl:justify-start lg:justify-start md:justify-start justify-center mt-5 gap-10 w-full h-auto items-center'>
              <button onClick={() => navigate('/start')} className='lg:px-10 md:px-8 px-4 w-full lg:text-lg md:text-md text-xs py-2 bg-primary border-2 border-primary hover:bg-transparent hover:text-primary text-white rounded-full transition-all duration-150 whitespace-nowrap'>Start Now</button>
              <button className='lg:px-10 md:px-8 px-4 w-full lg:text-lg md:text-md text-xs py-2 bg-primary border-2 border-primary hover:bg-transparent hover:text-primary text-white rounded-full transition-all duration-150'>Learn</button>
            </div>
          </div>
        </div>
      </Container>
      <OurServices />
      <About />
      <OurTeams />
      <PricingPolicy />
    </>
  )
}



export default Home