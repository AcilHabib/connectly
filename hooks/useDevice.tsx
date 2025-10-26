"use client"

import  deviceContext  from '@/contexts/DeviceContext'; 
import { useContext } from 'react';

export function useDevice() {
  const context = useContext(deviceContext);

  if (context === null) {
    throw new Error('there is a damn error with the deivce context');
  }

  return context; 
}
