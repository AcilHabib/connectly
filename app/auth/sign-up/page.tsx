'use client'
import React,{useContext} from 'react'
import { useDevice } from '@/hooks/useDevice'
import cLogo from '@/assets/cLogo.png'


function SignUp() {
    const {isMobile} = useDevice();

    function handleSubmit(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        // Handle form submission logic here
    }

    return (
        <div className={`flex ${isMobile ? 'flex-col' : 'flex-row'} justify-center items-center gap-10 min-h-screen p-4`}>
            <img src={cLogo.src} alt='logo' style={{
                width: isMobile ? '220px' : '650px',
                height: isMobile ? '220px' : '650px',
            }}/>
            <form onSubmit={handleSubmit} className={`w-full ${isMobile ? 'max-w-[90%]' : 'max-w-[400px]'} space-y-4`}>
                <div className="space-y-2">
                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full Name</label>
                    <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="John Doe"
                    />
                </div>
                
                <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="johndoe@example.com"
                    />
                </div>

                <div className="space-y-2">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="••••••••"
                    />
                </div>

                <div className="space-y-2">
                    <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm Password</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="••••••••"
                    />
                </div>

                <button
                    type="submit"
                    className={`w-full ${isMobile ? 'py-3' : 'py-2'} px-4 bg-[#3E1698] text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors`}
                >
                    Sign Up
                </button>

                <p className="text-center text-sm text-gray-600 mt-4">
                    Already have an account?{' '}
                    <a href="/auth/sign-in" className="text-blue-600 hover:text-blue-700 font-medium">
                        Sign In
                    </a>
                </p>
            </form>
        </div>
    )
}

export default SignUp
