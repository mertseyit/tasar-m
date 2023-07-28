import { RiCheckLine, RiCloseLine } from "react-icons/ri"
import { useWindowSize } from "../hooks/useWindowSize"
import Section from "../components/Section"
import Container from "../components/all/Container"
import { useNavigate } from "react-router-dom"

const PricingPolicy = () => {
  const { width } = useWindowSize()
  const navigate = useNavigate()
  return (
    <Container>
      <Section title='Pricing'>
        <div className='grid grid-cols-4 gap-10'>
          <div className={`${width < 768 && width > 634 ? "col-span-2" : "lg:col-span-1 md:col-span-2 col-span-4"} `}>
            <h4 className='text-center mb-3 mt-2 text-xl font'>Basic</h4>
            <div className='h-auto  w-full border shadow-lg rounded-md'>
              <div className='pt-10' />
              <Pricing have={true}>Lorem, ipsum dolor sit amet consectetur adipisicing.</Pricing>
              <Pricing have={true}>Lorem, ipsum dolor sit amet consectetur adipisicing.</Pricing>
              <Pricing have={true}>Lorem, ipsum dolor sit amet consectetur adipisicing.</Pricing>
              <Pricing have={true}>Lorem, ipsum dolor sit amet consectetur adipisicing.</Pricing>
              <Pricing have={false}>Lorem, ipsum dolor sit amet consectetur adipisicing.</Pricing>
              <Pricing have={false}>Lorem, ipsum dolor sit amet consectetur adipisicing.</Pricing>
              <Pricing have={false}>Lorem, ipsum dolor sit amet consectetur adipisicing.</Pricing>
              <Pricing have={false}>Lorem, ipsum dolor sit amet consectetur adipisicing.</Pricing>
              <Cost cost={9.99} />
              <div className='w-full flex justify-center items-center h-auto mt-5 mb-5'>
                <button onClick={() => navigate('/start')} className='text-center px-5 py-1 border rounded-3xl bg-primary text-white border-primary hover:bg-transparent hover:text-primary font-bold transition-all duration-150'>Try It</button>
              </div>
            </div>
          </div>
          <div className={`${width < 768 && width > 634 ? "col-span-2" : "lg:col-span-1 md:col-span-2 col-span-4"} `}>
            <h4 className='text-center mb-3 mt-2 text-xl font'>Advanced</h4>
            <div className='h-auto  w-full border shadow-lg rounded-md'>
              <div className='pt-10' />
              <Pricing have={true}>Lorem, ipsum dolor sit amet consectetur adipisicing.</Pricing>
              <Pricing have={true}>Lorem, ipsum dolor sit amet consectetur adipisicing.</Pricing>
              <Pricing have={true}>Lorem, ipsum dolor sit amet consectetur adipisicing.</Pricing>
              <Pricing have={true}>Lorem, ipsum dolor sit amet consectetur adipisicing.</Pricing>
              <Pricing have={true}>Lorem, ipsum dolor sit amet consectetur adipisicing.</Pricing>
              <Pricing have={false}>Lorem, ipsum dolor sit amet consectetur adipisicing.</Pricing>
              <Pricing have={false}>Lorem, ipsum dolor sit amet consectetur adipisicing.</Pricing>
              <Pricing have={false}>Lorem, ipsum dolor sit amet consectetur adipisicing.</Pricing>
              <Cost cost={29.99} />
              <div className='w-full flex justify-center items-center h-auto mt-5 mb-5'>
                <button onClick={() => navigate('/start')} className='text-center px-5 py-1 border rounded-3xl bg-primary text-white border-primary hover:bg-transparent hover:text-primary font-bold transition-all duration-150'>Try It</button>
              </div>
            </div>
          </div>
          <div className={`${width < 768 && width > 634 ? "col-span-2" : "lg:col-span-1 md:col-span-2 col-span-4"} `}>
            <h4 className='text-center mb-5 mt-2 text-2xl font-bold'>Enterprise</h4>
            <div style={{ height: 630 }} className='scale-105  w-full border-2 border-primary shadow-lg rounded-md'>
              <div className='pt-40' />
              <p className='px-4 text-lg text-center text-slate-500 '>This package adopts all services. It also has exclusive opportunities. For information about the package and pricing, enter your phone number and we will call you</p>
              <div className='px-2 mt-5 w-full'>
                <input type="number" className='w-full py-2 mb-3 border focus:outline-none px-2 rounded-lg text-xs' placeholder='Enter Your Institutional Number ' />
                <button className='w-full px-4 py-2 text-xs rounded-full border border-primary hover:bg-transparent hover:text-primary transition-all duration-150 bg-primary text-white'>Send</button>
              </div>
            </div>
          </div>
          <div className={`${width < 768 && width > 634 ? "col-span-2" : "lg:col-span-1 md:col-span-2 col-span-4"} `}>
            <h4 className='text-center mb-3 mt-2 text-xl font'> Professional</h4>
            <div className='h-auto w-full border shadow-lg rounded-md'>
              <div className='pt-10' />
              <Pricing have={true}>Lorem, ipsum dolor sit amet consectetur adipisicing.</Pricing>
              <Pricing have={true}>Lorem, ipsum dolor sit amet consectetur adipisicing.</Pricing>
              <Pricing have={true}>Lorem, ipsum dolor sit amet consectetur adipisicing.</Pricing>
              <Pricing have={true}>Lorem, ipsum dolor sit amet consectetur adipisicing.</Pricing>
              <Pricing have={true}>Lorem, ipsum dolor sit amet consectetur adipisicing.</Pricing>
              <Pricing have={true}>Lorem, ipsum dolor sit amet consectetur adipisicing.</Pricing>
              <Pricing have={true}>Lorem, ipsum dolor sit amet consectetur adipisicing.</Pricing>
              <Pricing have={true}>Lorem, ipsum dolor sit amet consectetur adipisicing.</Pricing>
              <Cost cost={69.99} />
              <div className='w-full flex justify-center items-center h-auto mt-5 mb-5'>
                <button onClick={() => navigate('/start')} className='text-center px-5 py-1 border rounded-3xl bg-primary text-white border-primary hover:bg-transparent hover:text-primary font-bold transition-all duration-150'>Try It</button>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </Container>
  )
}

const Pricing = ({ have, children }: { have: boolean, children: React.ReactNode }) => {
  return (
    <>
      <div className='flex lg:justify-start justify-center items-center h-auto px-2 pb-4 gap-2'>
        {
          have ? <RiCheckLine className="text-lg text-green-500" /> : <RiCloseLine className="text-lg text-red-500" />
        }
        <span className='text-sm text-slate-500'>{children}</span>
      </div>
    </>
  )
}

const Cost = ({ cost }: { cost: number }) => {
  const { width } = useWindowSize()
  return (
    <div className='flex gap-2 mt-5 items-start w-full justify-center'>
      <span className={`${width < 1330 ? "text-3xl" : "lg:text-5xl md:text-3xl text-2xl"}   text-green-500`}>{cost}</span>
      <span className={`mt-1 ${width < 1330 ? "text-xs" : "lg:text-md md:text-sm text-xs"} text-slate-500`}>$/month</span>
    </div>
  )
}

export default PricingPolicy