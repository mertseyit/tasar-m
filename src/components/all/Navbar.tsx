import { useState } from 'react'
import Container from "./Container"
import ReactLink from "./ReactLink"
import { Link, NavLink } from 'react-router-dom'
import { useWindowSize } from "../../hooks/useWindowSize"
import { RiMenuFill, RiCloseLine } from 'react-icons/ri'
const Navbar = () => {
  const { width } = useWindowSize()
  return (
    <>
      {
        width > 1130 ? (
          <WideNavbar />
        ) : (
          <MobileNavbar />
        )
      }
    </>
  )
}

const MobileNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const { width } = useWindowSize()
  return (
    <>
      <div className="bg-white z-50 py-5 ">
        <Container>
          <div className="bg-white flex h-auto justify-between items-center">
            <NavLink to='/' className="text-2xl font-bold text-violet-500">CWD</NavLink>
            <button onClick={() => setMenuOpen(pre => !pre)}>
              <RiMenuFill className="text-3xl" />
            </button>
          </div>
        </Container>
      </div>
      {/* mobile menu */}
      <div style={{ width: menuOpen ? width - (width > 1046 ? 400 : (width > 822 ? 200 : 100)) : 0, padding: menuOpen ? 20 : 0 }} className='p-5 transition-all duration-100 overflow-hidden fixed right-0 top-0 h-full bg-white z-40 shadow-2xl'>
        <div>
          <button onClick={() => setMenuOpen(pre => !pre)}>
            <RiCloseLine className="text-3xl" />
          </button>
          <div className='mt-10'>
            <nav className="flex flex-col gap-5">
              <ReactLink to='/'>Home</ReactLink>
              <ReactLink to='/our-services'>Our Services</ReactLink>
              <ReactLink to='/about'>About</ReactLink>
              <ReactLink to='/our-teams'>Our Teams</ReactLink>
              <ReactLink to='/pricing'>Pricing</ReactLink>
              <Link to='/products' className='text-center py-2 font-semibold text-md bg-primary text-white  px-4 rounded-full '>Explore</Link>
              <Link className='bg-purple-600 text-white rounded-full py-2 text-center text-md font-bold px-4' to='/start'>Start Here</Link>
            </nav>
          </div>
        </div>
      </div>
    </>

  )
}

const WideNavbar = () => {
  return (
    <div className="bg-white py-5">
      <Container>
        <div className="bg-white flex h-auto justify-between items-center">
          <NavLink to='/' className="text-2xl font-bold text-violet-500">CWD</NavLink>
          <nav className="flex gap-10 items-center h-auto">
            <ReactLink to='/'>Home</ReactLink>
            <ReactLink to='/our-services'>Our Services</ReactLink>
            <ReactLink to='/about'>About</ReactLink>
            <ReactLink to='/our-teams'>Our Teams</ReactLink>
            <ReactLink to='/pricing'>Pricing</ReactLink>
            <Link to='/products' className='font-semibold text-md bg-primary text-white  px-4 rounded-full '>Explore</Link>
            <Link className='bg-purple-600 text-white rounded-full text-center text-md font-bold px-4' to='/start'>Start Here</Link>
          </nav>
        </div>
      </Container>
    </div>
  )
}

export default Navbar