import Section from "../components/Section"
import { useWindowSize } from "../hooks/useWindowSize"
import dataStorage from '../../public/images/data-storage.jpg'
import flexWebDesign from '../../public/images/flexable-web-design.jpg'
import eCommerce from '../../public/images/e-commerce.jpg'
import managementPanel from '../../public/images/management-panel.jpg'
import Container from "../components/all/Container"

const OurServices = () => {
  const { width } = useWindowSize()
  return (
    <Container>
      <Section title='Our Services' >
        <div className='grid lg:grid-cols-4 md:grid-cols-12 grid-cols-6 gap-10 h-auto mt-10 w-auto'>
          <div className={`relative ${width > 1530 ? "col-span-1" : "lg:col-span-2 md:col-span-6 sm:col-span-3 col-span-6"} overflow-x-hidden group w-auto p-1 border rounded-md hover:scale-105 transition-all duration-100 cursor-pointer shadow-md hover:shadow-xl flex flex-col justify-between`}>
            <img src={dataStorage} className='w-full' alt="Data Proccesing Image" />
            <h3 className='text-center lg:text-xl md:text-xl sm:text-xl text-sm font-semibold mt-5 text-blue-700 pb-10'>Data Storage</h3>
            <span className={`absolute bottom-0 left-0 -translate-x-20 group-hover:translate-x-0 transition-all duration-200 delay-100 p-2 lg:text-md md:text-md text-xs text-primary font-semibold`}>Examing</span>
          </div>
          <div className={`relative ${width > 1530 ? "col-span-1" : "lg:col-span-2 md:col-span-6 sm:col-span-3 col-span-6"} overflow-x-hidden group  w-full p-1 border rounded-md hover:scale-105 transition-all duration-100 cursor-pointer shadow-md hover:shadow-xl flex flex-col justify-between`}>
            <img src={flexWebDesign} className='w-full' alt="Data Reading Image" />
            <h3 className='text-center lg:text-xl md:text-xl sm:text-xl text-sm font-semibold mt-5 text-teal-500 pb-10'>Flexable Web Design</h3>
            <span className={`absolute bottom-0 left-0 -translate-x-20 group-hover:translate-x-0 transition-all duration-200 delay-100 p-2 lg:text-md md:text-md text-xs text-primary font-semibold`}>Examing</span>
          </div>
          <div className={`relative ${width > 1530 ? "col-span-1" : "lg:col-span-2 md:col-span-6 sm:col-span-3 col-span-6"} overflow-x-hidden group w-full p-1 border rounded-md hover:scale-105 transition-all duration-100 cursor-pointer shadow-md hover:shadow-xl flex flex-col justify-between`}>
            <img src={eCommerce} className='w-full' alt="Data Sharing Image" />
            <h3 className='text-center lg:text-xl md:text-xl sm:text-xl text-sm font-semibold mt-5 text-blue-400 pb-10'>E-commerce Infrastructure</h3>
            <span className={`absolute bottom-0 left-0 -translate-x-20 group-hover:translate-x-0 transition-all duration-200 delay-100 p-2 lg:text-md md:text-md text-xs text-primary font-semibold`}>Examing</span>
          </div>
          <div className={`relative ${width > 1530 ? "col-span-1" : "lg:col-span-2 md:col-span-6 sm:col-span-3 col-span-6"} overflow-x-hidden group  w-full p-1 border rounded-md hover:scale-105 transition-all duration-100 cursor-pointer shadow-md hover:shadow-xl`}>
            <img src={managementPanel} className='w-full' alt="Data Proccesing Image" />
            <h3 className='text-center lg:text-xl md:text-xl sm:text-xl text-sm font-semibold mt-5 text-pink-400 pb-10'>Management Panel</h3>
            <span className={`absolute bottom-0 left-0 -translate-x-20 group-hover:translate-x-0 transition-all duration-200 delay-100 p-2 lg:text-md md:text-md text-xs text-primary font-semibold`}>Examing</span>
          </div>
        </div>
      </Section>
    </Container>
  )
}

export default OurServices