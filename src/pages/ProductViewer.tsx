import { useContext, useEffect } from "react"
import { ViewProductContext } from "../context/ViewProductContext"
import { useNavigate } from 'react-router-dom';
import Container from "../components/all/Container";
import { RiDownload2Fill, RiEyeLine, RiHeart3Fill} from "react-icons/ri"
import { useWindowSize } from "../hooks/useWindowSize";
const ProductViewer = () => {
  const { viewProduct } = useContext(ViewProductContext)
  const navigate = useNavigate()
  useEffect(() => {
    if (!viewProduct) {
      navigate('/products')
    }
  }, [viewProduct])

  const { width } = useWindowSize()
  return (
    <Container>
      <div>
        <button onClick={() => navigate('/products')} className={`${width > 453 && width < 770 ? "text-lg" : "lg:text-lg md:text-md text-sm"} font-semibold text-blue-400 w-auto hover:text-blue-700 transition-all duration-100`}>Backt to All Products</button>
      </div>
      <div className="pb-32 pt-5">
        <div className="grid grid-cols-12 w-full h-auto">
          <div className="lg:col-span-7 md:col-span-6 col-span-12 w-full">
            <img className="w-full" src={viewProduct?.product} alt="Product image" />
          </div>
          <div className="lg:col-span-5 md:col-span-6 col-span-12 lg:p-20 md:p-7">
            <div className="mb-5">
              <span className={`${width >453 && width < 770 ? "text-xl" : "lg:text-xl md:text-md text-sm"} font-bold`}>Name:</span> <span className={`${width >453 && width < 770 ? "text-xl" : "lg:text-xl md:text-md text-sm"} font-semibold text-slate-600`}>{viewProduct?.name}</span>
            </div>
            <div className="mb-5">
              <span className={`${width >453 && width < 770 ? "text-xl" : "lg:text-xl md:text-md text-sm"} font-bold`}>Creator:</span> <span className={`${width >453 && width < 770 ? "text-xl" : "lg:text-xl md:text-md text-sm"} font-semibold text-slate-600`}>{viewProduct?.creator}</span>
            </div>
            <div className="w-full p-2 border flex justify-evenly py-3 items-center h-auto rounded-lg shadow-lg">
              <div className="flex flex-col items-center justify-center">
                <RiDownload2Fill className={`${width > 452 && width < 770 ? "text-3xl " : "lg:text-3xl md:text-2xl text-lg"} text-blue-600`} />
                <span className={`italic ${width > 452 && width < 770 ? "text-md" : "lg:text-md md:text-sm text-xs"} text-slate-500`}>{viewProduct?.download}</span>
              </div>
              <div className="flex flex-col items-center justify-center">
                <RiHeart3Fill className={`${width > 452 && width < 770 ? "text-3xl " : "lg:text-3xl md:text-2xl text-lg"} text-red-600`} />
                <span className={`italic ${width > 452 && width < 770 ? "text-md" : "lg:text-md md:text-sm text-xs"} text-slate-500`}>{viewProduct?.like}</span>
              </div>
              <div className="flex flex-col items-center justify-center">
                <RiEyeLine className={`${width > 452 && width < 770 ? "text-3xl " : "lg:text-3xl md:text-2xl text-lg"} text-green-600`} />
                <span className={`italic ${width > 452 && width < 770 ? "text-md" : "lg:text-md md:text-sm text-xs"} text-slate-500`}>{viewProduct?.view}</span>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center mt-10 gap-5">
              <button onClick={() => navigate('/start')} className={` w-full text-center py-2 text-white  bg-red-600 rounded-lg ${width>452 && width < 770 ? "text-lg": "lg:text-lg md:text-md text-sm"}`}>Like</button>
              <button onClick={() => navigate('/start')} className={` w-full text-center py-2 text-white  bg-primary rounded-lg ${width>452 && width < 770 ? "text-lg": "lg:text-lg md:text-md text-sm"}`}>Download</button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default ProductViewer