import React from 'react'

const Navbar = () => {
    return (
        <div>
            <nav class="bg-gray-50 border-gray-50">
                <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen p-2">
                    <a href="https://flowbite.com" class="flex items-center space-x-3 rtl:space-x-reverse">
                        <span class="self-center text-xl font-semibold whitespace-nowrap text-black">BgRemover</span>
                    </a>
                    <div class="flex items-center space-x-6 rtl:space-x-reverse">
                        <a href="tel:5541251234" class="text-xs  text-purple-500 hover:underline">(555) 412-1238</a>
                        <a href="#" class="text-xs  text-blue-600 dark:text-blue-500 hover:underline">Login</a>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar