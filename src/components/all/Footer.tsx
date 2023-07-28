import Container from "./Container"

const Footer = () => {
  return (
    <footer className="lg:py-15 md:py-12 py-10 w-full  bg-primary ">
      <Container>
        <div className="h-auto grid grid-cols-12 gap-5">
          <div className="pt-3 px-3 pb-5  lg:col-span-4 md:col-span-6 col-span-12 text-white w-full h-auto">
            <h5 className=" font-bold lg:text-3xl md:text-2xl text-xl">Quick Links</h5>
            <ul className="my-5">
              <li className="mb-1 lg:text-md md:text-md text-sm whitespace-nowrap  cursor-pointer hover:text-white text-slate-400 w-1/5 font-semibold">Home</li>
              <li className="mb-1 lg:text-md md:text-md text-sm whitespace-nowrap  cursor-pointer hover:text-white text-slate-400 w-1/5 font-semibold">About</li>
              <li className="mb-1 lg:text-md md:text-md text-sm whitespace-nowrap  cursor-pointer hover:text-white text-slate-400 w-1/5 font-semibold">Pricing</li>
              <li className="mb-1 lg:text-md md:text-md text-sm whitespace-nowrap  cursor-pointer hover:text-white text-slate-400 w-1/5 font-semibold">Our Teams</li>
              <li className="mb-1 lg:text-md md:text-md text-sm whitespace-nowrap  cursor-pointer hover:text-white text-slate-400 w-1/5 font-semibold">Our Services</li>
            </ul>
          </div>
          <div className="pt-3 px-3 pb-5 lg:col-span-4 md:col-span-6 col-span-12 text-white w-full h-auto">
            <h5 className=" lg:text-3xl md:text-2xl text-xl font-bold">Privacy and Security</h5>
            <ul className="my-5">

              <li className="mb-1 lg:text-md md:text-md text-sm whitespace-nowrap  cursor-pointer hover:text-white text-slate-400 w-1/5 font-semibold">Terms of use</li>
              <li className="mb-1 lg:text-md md:text-md text-sm whitespace-nowrap  cursor-pointer hover:text-white text-slate-400 w-1/5 font-semibold">Privacy and Security</li>
              <li className="mb-1 lg:text-md md:text-md text-sm whitespace-nowrap  cursor-pointer hover:text-white text-slate-400 w-1/5 font-semibold">Legal notices</li>
            </ul>
          </div>
          <div className="pt-3 px-3 pb-5 lg:col-span-4 md:col-span-12 col-span-12 text-white w-full h-auto">
            <h5 className=" lg:text-3xl md:text-2xl text-xl font-bold">Contact Us</h5>
            <form >
              <div className="flex gap-2 my-5">
                <input type="text" placeholder="Name" className="w-full bg-transparent border-2 border-blue text-white focus:outline-none px-2 py-3 text-sm" />
                <input type="email" placeholder="Email" className="w-full bg-transparent border-2 border-blue text-white focus:outline-none px-2 py-3 text-sm" />
              </div>
              <button type="submit" className="w-full  text-center py-3 font-bold bg-white text-primary hover:bg-transparent border-2 border-primary hover:border-white hover:text-white transition-all duration-150">Send</button>
            </form>
          </div>
          <div className="w-full col-span-12 text-center text-white">
            <span className="font-bold">&copy; {new Date().getFullYear()}.</span> All Right Reserved
          </div>
        </div>
      </Container>
    </footer >
  )
}

export default Footer