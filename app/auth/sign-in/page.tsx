'use client'
import React from 'react'
import { useDevice } from '@/hooks/useDevice'
import cLogo from '@/assets/cLogo.png'

function SignIn() {
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

                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <input
                            id="remember-me"
                            name="remember-me"
                            type="checkbox"
                            className="h-4 w-4 text-[#3E1698] border-gray-300 rounded focus:ring-blue-500"
                        />
                        <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                            Remember me
                        </label>
                    </div>
                    <a href="#" className="text-sm text-[#3E1698] hover:text-blue-700">
                        Forgot password?
                    </a>
                </div>

                <button
                    type="submit"
                    className={`w-full ${isMobile ? 'py-3' : 'py-2'} px-4 bg-[#3E1698] text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors`}
                >
                    Sign In
                </button>

                <p className="text-center text-sm text-gray-600 mt-4">
                    Don't have an account?{' '}
                    <a href="/auth/sign-up" className="text-[#3E1698] hover:text-blue-700 font-medium">
                        Sign Up
                    </a>
                </p>
            </form>
        </div>
    )
}

export default SignIn
