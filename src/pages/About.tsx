import mission from '../../public/images/mission.jpg'
import vission from '../../public/images/vision.jpg'
import Section from '../components/Section'
import Container from '../components/all/Container'
import { useWindowSize } from '../hooks/useWindowSize'
const About = () => {
  const { width } = useWindowSize()
  return (
    <Container>
      <Section title='About Us' >
        <div className={`mb-5 flex ${width > 765 ? "flex-row" : "flex-col"} justify-between items-center h-auto w-full gap-3`}>
          <div className='border p-3'>
            <p className='mb-4 indent-3 text-slate-500'>CDW is a platform that offers custom-designed, flexible and redesignable websites for personal and corporate uses. Our goal is to transform your websites and make them a functional and aesthetically appealing experience that perfectly represents your digital presence.</p>
            <p className='indent-3 text-slate-500'>We closely follow the current developments in the field of technology and customer needs and focus on the latest technologies to create websites accordingly. Our websites feature user-friendly interfaces, fast loading times and high-performance features, as well as modern and elegant designs.</p>
          </div>
          <div className='border p-3'>
            <p className='mb-4 indent-3 text-slate-500'>We mainly use ReactJs technology because it provides the perfect framework for building flexible and dynamic websites. This way, we ensure that your website engages with your users, quickly finds the content they want, and gains a unique identity that makes you stand out in the digital space.</p>
            <p className='indent-3 text-slate-500'>Designing SEO-compliant websites is also one of our priorities. With websites optimized for search engines, we ensure that your target audience can easily find you and make your business more visible on online platforms.</p>
          </div>
        </div>
        <div className='grid grid-cols-2 gap-5'>
          <div style={{
            backgroundImage: `url("${vission}")`,
            backgroundPosition: "top",
            backgroundSize: "cover",
            width: "100%",
            height: 500
          }} className='flex justify-center items-center rounded-lg lg:col-span-1 md:col-span-1 col-span-2'>
            <div className='w-full h-full bg-black bg-opacity-50 flex justify-center '>
              <div className='flex  items-center flex-col'>
                <h3 className={`xl:mt-40  lg:text-5xl font-bold text-white ${width < 767 && width > 570 ? "mt-40 text-4xl" : "lg:mt-32 mt-24 md:text-3xl text-xl"}`}>Our <span className='text-purple-300'>Vission</span></h3>
                <p className={`text-white px-10 mt-5 font-semibold lg:text-lg md:text-md ${width < 767 && width > 570 ? "text-xl" : "text-sm"} xs:text-sm `}>We aim to be a leading platform by enabling our customers to reach their unlimited potential in the digital world. We offer a competitive advantage to individuals and organizations from every sector with modern, functional and user-friendly websites. We lead the digital transformation with customized solutions with creative approaches.</p>
              </div>
            </div>
          </div>
          <div style={{
            backgroundImage: `url("${mission}")`,
            backgroundPosition: "top",
            backgroundSize: "cover",
            width: "100%",
            height: 500
          }} className='flex justify-center items-center rounded-lg lg:col-span-1 md:col-span-1 col-span-2'>
            <div className='w-full h-full bg-black bg-opacity-50 flex  '>
              <div className='flex items-center flex-col'>
                <h3 className={`xl:mt-40 lg:text-5xl  font-bold text-white ${width < 767 && width > 570 ? "mt-40 text-4xl" : "lg:mt-32 mt-24 md:text-3xl text-xl"}`}>Our <span className='text-blue-200'>Mission</span></h3>
                <p className={`text-white px-10  mt-5 font-semibold lg:text-lg md:text-md ${width < 767 && width > 570 ? "text-xl" : "text-sm"} xs:text-sm`}>By prioritizing the digital experience of users, we work hard to understand their needs and exceed their expectations. We contribute to the success of our business partners and customers by designing reliable and SEO compatible websites. As a passionate team, we work to earn the trust of our customers and increase their digital success.</p>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </Container>
  )
}

export default About