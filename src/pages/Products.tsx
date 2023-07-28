import Container from "../components/all/Container"
import { products } from "../data/products"
import { RiDownload2Fill, RiEyeLine, RiHeart3Fill, RiStarSFill } from "react-icons/ri"
import { useWindowSize } from "../hooks/useWindowSize"
import Section from "../components/Section"
import { Link } from "react-router-dom"
import { Fragment, useContext } from "react"
import { ViewProductContext } from "../context/ViewProductContext"
const Products = () => {

  const { width } = useWindowSize()
  const { setViewProduct } = useContext(ViewProductContext)
  return (
    <Container>
      <Section desc="You can also inspect our ready products" title="Our Products">
        <div className={`${width < 522 ? "flex flex-col items-center justify-center gap-10" : "grid grid-cols-12 gap-10 h-auto w-full"}`}>
          {
            products.map((item, key) => (
              <Fragment key={key}>
                {/* ----- */}
                <Link onClick={() => setViewProduct(item)}  to="/products/ddd" key={key} className={`${width < 640 && width > 420 ? "col-span-6" : "lg:col-span-3 md:col-span-4 sm:col-span-6 col-span-12"} ${width < 522 && "w-5/6"} flex flex-col justify-between p-1 border shadow-lg hover:shadow-xl transition-all duration-150 cursor-pointer hover:-translate-y-2`}>
                  <img src={item.product} alt="Desing 1" className="w-full h-full" />
                  <div>
                    <div className="p-3 flex w-full h-auto justify-between items-center">
                      <p className={`${width < 1350 && width > 1024 ? "text-xs" : "lg:text-lg md:text-md text-xs"} font-semibold text-slate-400`}>{item.name}</p>
                      <div className="flex gap-2 h-auto items-center">
                        <RiStarSFill className="text-yellow-300 text-" />
                        <span className={`${width < 1350 && width > 1024 ? "text-xs" : "lg:text-lg md:text-md text-xs"} font-bold text-slate-600`}>{item.rate}</span>
                      </div>
                    </div>
                    <div className="flex gap-10 item-center h-auto mt-5 justify-center">
                      <div className="flex flex-col items-center">
                        <RiDownload2Fill className={`text-blue-500 ${width < 1350 && width > 1024 ? "text-xs" : "lg:text-lg md:text-md text-xs"}`} />
                        <span className={`${width < 1350 && width > 1024 ? "text-xs" : "lg:text-lg md:text-md text-xs"} text-slate-500`}>{item.download}</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <RiHeart3Fill className={`text-red-500 ${width < 1350 && width > 1024 ? "text-xs" : "lg:text-lg md:text-md text-xs"}`} />
                        <span className={`${width < 1350 && width > 1024 ? "text-xs" : "lg:text-lg md:text-md text-xs"} text-slate-500`}>{item.like}</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <RiEyeLine className={`text-green-500 ${width < 1350 && width > 1024 ? "text-xs" : "lg:text-lg md:text-md text-xs"}`} />
                        <span className={`${width < 1350 && width > 1024 ? "text-xs" : "lg:text-lg md:text-md text-xs"} text-slate-500`}>{item.view}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </Fragment>
            ))
          }
        </div>
      </Section>
    </Container>
  )
}

export default Products