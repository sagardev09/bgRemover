import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import logo from "@/public/logo.svg"

const Navbar = () => {
    return (
        <div>
            <nav class=" border-gray-50">
                <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen p-2">
                    <Link href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
                        <Image className='h-10 w-10 object-contain' src={logo} alt='' />
                        <span class="self-center text-lg font-semibold whitespace-nowrap text-black uppercase">BgRemover</span>
                    </Link>
                    <div class="flex items-center space-x-6 rtl:space-x-reverse">
                        <a href="#" class="text-sm  text-purple-500 hover:bg-purple-500 transition-all 300ms ease-in-out hover:text-white p-2 px-4 border border-purple-500 rounded-md">Sign up</a>
                        <a href="#" class="text-sm  text-blue-600  hover:bg-blue-600 hover:text-white border border-blue-600 transition-all 300ms ease-in-out p-2 px-4 rounded-md">Login</a>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar