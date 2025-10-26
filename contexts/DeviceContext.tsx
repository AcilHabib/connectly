'use client'
import { createContext, useEffect, useState } from 'react';

type DeviceContextType = {
  isMobile: boolean;
  setIsMobile: React.Dispatch<React.SetStateAction<boolean>>;
};

 const deviceContext = createContext<DeviceContextType | null>(null);

export function DeviceProvider({children}: {children: React.ReactNode}) {

    const [isMobile, setIsMobile] = useState(false);

    function handleDevice(){
        if (window.innerWidth < 768) {
            setIsMobile(true);
        } else {
            setIsMobile(false);
        }
    }

    useEffect(() => {
        handleDevice();
        window.addEventListener('resize', handleDevice);
        return () => window.removeEventListener('resize', handleDevice);
    }, []);
  return (
    <deviceContext.Provider value={{isMobile, setIsMobile}}>
      {children}
    </deviceContext.Provider>
  )
}

export default deviceContext
