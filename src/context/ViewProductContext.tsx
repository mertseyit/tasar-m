import { createContext, useState } from "react";

type ContextType = {
  viewProduct:Product | null,
  setViewProduct:React.Dispatch<React.SetStateAction<null | Product>>
}

export const ViewProductContext = createContext<ContextType>({
  viewProduct:null,
  setViewProduct:() => { }
})


export const ViewProductProvider = ({children}:{children:React.ReactNode}) => {
  const [viewProduct, setViewProduct] = useState<Product | null>(null)
  return(
    <ViewProductContext.Provider value={{
      viewProduct, setViewProduct
    }}>
      {children}
    </ViewProductContext.Provider>
  )
}