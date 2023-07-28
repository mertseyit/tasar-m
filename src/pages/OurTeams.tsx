import ceo from '../../public/images/ceo.jpg'
import productManager from '../../public/images/product-manager.jpg'
import softExpert from '../../public/images/software-expert.jpg'
import hrs from '../../public/images/hrs.jpg'
import cloudSystExpt from '../../public/images/clous-systeam-expert.jpg'
import projectManager from '../../public/images/project-manager.jpg'
import Section from '../components/Section'
import Container from '../components/all/Container'
const OurTeams = () => {
  return (
    <Container>
      <Section title='Our Team'>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 xs:grid-cols-1 gap-5 '>
          <div className='col-span-1 border p-2 rounded-md flex flex-col justify-between'>
            <div className='  rounded-full  overflow-hidden'>
              <img className='w-full' src={ceo} alt="Ceo" />
            </div>
            <div className='flex flex-col justify-center w-full items-center mt-5'>
              <span className='font-semibold text-lg'>Jack Smith</span>
              <span className='text-slate-400 italic'>CEO</span>
            </div>
          </div>
          <div className='col-span-1 border p-2 rounded-md flex flex-col justify-between'>
            <div className='  rounded-full  overflow-hidden'>
              <img className='w-full' src={cloudSystExpt} alt="Ceo" />
            </div>
            <div className='flex flex-col justify-center w-full items-center mt-5'>
              <span className='font-semibold text-lg'>Harry Murphy</span>
              <span className='text-slate-400 italic'>Cloud Systeam Expert</span>
            </div>
          </div>
          <div className='col-span-1 border p-2 rounded-md flex flex-col justify-between'>
            <div className='  rounded-full  overflow-hidden'>
              <img className='w-full' src={productManager} alt="Ceo" />
            </div>
            <div className='flex flex-col justify-center w-full items-center mt-5'>
              <span className='font-semibold text-lg'>Thomas O'Brien</span>
              <span className='text-slate-400 italic'>Product Manager</span>
            </div>
          </div>
          <div className='col-span-1 border p-2 rounded-md flex flex-col justify-between '>
            <div className='  rounded-full  overflow-hidden'>
              <img className='w-full' src={softExpert} alt="Ceo" />
            </div>
            <div className='flex flex-col justify-center w-full items-center mt-5'>
              <span className='font-semibold text-lg'>William O'Ryan</span>
              <span className='text-slate-400 italic'>Software Engineering</span>
            </div>
          </div>
          <div className='col-span-1 border p-2 rounded-md flex flex-col justify-between'>
            <div className='  rounded-full  overflow-hidden'>
              <img className='w-full' src={hrs} alt="Ceo" />
            </div>
            <div className='flex flex-col justify-center w-full items-center mt-5'>
              <span className='font-semibold text-lg text-center'>Willian Roy, Jack Rayn and Isabella Miller</span>
              <span className='text-slate-400 italic'>Human Resources</span>
            </div>
          </div>
          <div className='col-span-1 border p-2 rounded-md flex flex-col justify-between'>
            <div className='  rounded-full  overflow-hidden'>
              <img className='w-full' src={projectManager} alt="Ceo" />
            </div>
            <div className='flex flex-col justify-center w-full items-center mt-5'>
              <span className='font-semibold text-lg text-center'>Jack Miller</span>
              <span className='text-slate-400 italic'>Project Manager</span>
            </div>
          </div>
        </div>
      </Section>
    </Container>
  )
}

export default OurTeams