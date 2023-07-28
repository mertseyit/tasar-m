import { NavLink } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
const ReactLink = ({children, to}:{children:string, to:string}) => {
  const { pathname } = useLocation()
  return (
    <>
      <NavLink className={`font-semibold lg:text-lg  border-b-2  pb-2 transition-all duration-150  ${pathname === to ? "active-link" : "text-secondary hover:text-slate-800 hover:border-secondary border-transparent"}`} to={to}>{children}</NavLink>
    </>
  )
}

export default ReactLink