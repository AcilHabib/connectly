import { useContext } from 'react';
import  deviceContext  from '@/contexts/DeviceContext';  // adjust path

export function useDevice() {
  const context = useContext(deviceContext);

  if (context === null) {
    throw new Error('there is a damn error with the deivce context');
  }

  return context; 
}
