'use client'

import SearchIcon from '@/assets/search-icon.svg'
import SettingHeaderIcon from '@/assets/setting-header-icon.svg'
import NotifIcon from '@/assets/notif-icon.svg'
import Image from 'next/image'
import { AlignJustify, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { usePathname } from "next/navigation";
import Link from 'next/link'
import DashboardIcon from '@/assets/dashboard-icon.svg'
import TransactionsIcon from '@/assets/transactions-icon.svg'
import AccountsIcon from '@/assets/accounts-icon.svg'

export default function AccountsPage() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const pathname = usePathname()

    // non aktifkan scroll saat menu terbuka
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "auto"
        }
        return () => {
            document.body.style.overflow = "auto"
        }
    }, [isMenuOpen])

    return (
        <div className='bg-[#F5F7FA] w-full'>
            {/* header desain laptop dan dekstop */}
            <header className="hidden lg:flex xl:h-[100px] h-[85px] w-full bg-white border-b border-b-[#E6EFF5] justify-between items-center px-10">
                <h1 className="text-[28px] font-semibold text-[#343C6A]">Accounts</h1>

                <div className='flex items-center xl:gap-10 gap-5'>
                    <div className="flex w-[255px] h-[50px] bg-[#F5F7FA] rounded-[40px] px-4 py-2 items-center gap-x-3">
                        <button>
                            <SearchIcon className='text-[#718EBF]' />
                        </button>
                        <input
                            type="text"
                            placeholder="Search for something"
                            className='text-[#8BA3CB] text-[15px] outline-none w-full'
                        />
                    </div>

                    <button className='cursor-pointer'>
                        <SettingHeaderIcon />
                    </button>

                    <button className='cursor-pointer'>
                        <NotifIcon />
                    </button>

                    <button className='cursor-pointer'>
                        <Image
                            src='/profile-picture.svg'
                            alt="Profile Picture"
                            width={60}
                            height={60}
                        />
                    </button>
                </div>
            </header>

            {/* header desain mobile dan tablet */}
            <header className="lg:hidden flex flex-col w-full bg-white border-b border-b-[#E6EFF5] p-7 gap-5">
                <div className='flex justify-between items-center'>
                    <button
                        onClick={() => setIsMenuOpen(prev => !prev)}
                        className='relative w-8 h-8 flex items-center justify-center'
                    >
                        {/* Icon Menu */}
                        <span
                            className={`absolute transition-all duration-200 ease-in-out ${isMenuOpen ? 'opacity-0 scale-75 rotate-90' : 'opacity-100 scale-100 rotate-0'}`}
                        >
                            <AlignJustify size={24} strokeWidth={2} color="#2C448C" />
                        </span>

                        {/* Icon Close */}
                        <span
                            className={`absolute transition-all duration-200 ease-in-out ${isMenuOpen ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-75 -rotate-90'}`}
                        >
                            <X size={24} strokeWidth={2} color="#2C448C" />
                        </span>
                    </button>

                    <h1 className="text-xl font-semibold text-[#343C6A]">Accounts</h1>
                    <button className='cursor-pointer'>
                        <Image
                            src='/profile-picture.svg'
                            alt="Profile Picture"
                            width={35}
                            height={35}
                        />
                    </button>
                </div>

                <div className="flex w-full h-[50px] bg-[#F5F7FA] rounded-[40px] px-4 py-2 items-center gap-x-3">
                    <button>
                        <SearchIcon className='text-[#718EBF]' />
                    </button>
                    <input
                        type="text"
                        placeholder="Search for something"
                        className='text-[#8BA3CB] text-[15px] outline-none w-full'
                    />
                </div>
            </header>

            {/* toggle menu pada tampilan mobile */}
            <div
                className={`
                    fixed top-0 left-0 h-screen w-screen bg-white z-50
                    transform transition-transform duration-500 ease-in-out
                    ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}
                `}
            >
                <nav>
                    <div className='flex justify-between items-center p-7'>
                        <Image
                            src='/logo.svg'
                            alt="Bank Dash Logo"
                            width={183}
                            height={36}
                        />

                        <button
                            onClick={() => setIsMenuOpen(prev => !prev)}
                            className='w-8 h-8 flex items-center justify-center'
                        >
                            {/* Icon Close */}
                            <span>
                                <X size={24} strokeWidth={2} color="#2C448C" />
                            </span>
                        </button>
                    </div>

                    <div className="text-lg font-medium">
                        <Link
                            href='/'
                            className={`h-[60px] flex items-center xl:pl-10 pl-6 space-x-5 ${pathname === '/' ? 'border-l-4 text-[#2D60FF]' : 'border-l-4 border-l-white text-[#B1B1B1]'}`}
                        >
                            <DashboardIcon
                                className="w-[25px] h-[25px]"
                            />
                            <span>Dashboard</span>
                        </Link>
                        <Link
                            href='/transactions'
                            className={`h-[60px] flex items-center xl:pl-10 pl-6 space-x-5 ${pathname === '/transactions' ? 'border-l-4 text-[#2D60FF]' : 'border-l-4 border-l-white text-[#B1B1B1]'}`}
                        >
                            <TransactionsIcon
                                className="w-[25px] h-[25px]"
                            />
                            <span>Transactions</span>
                        </Link>
                        <Link
                            href='/accounts'
                            className={`h-[60px] flex items-center xl:pl-10 pl-6 space-x-5 ${pathname === '/accounts' ? 'border-l-4 text-[#2D60FF]' : 'border-l-4 border-l-white text-[#B1B1B1]'}`}
                        >
                            <AccountsIcon
                                className="w-[25px] h-[25px]"
                            />
                            <span>Accounts</span>
                        </Link>
                    </div>
                </nav>
            </div>

            <main className='xl:p-10 p-5 w-full'>
                HALAMAN AKUN
            </main>
        </div>
    );
}