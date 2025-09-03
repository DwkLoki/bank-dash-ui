'use client'

import "./globals.css";
import { Inter } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import DashboardIcon from '@/assets/dashboard-icon.svg'
import TransactionsIcon from '@/assets/transactions-icon.svg'
import AccountsIcon from '@/assets/accounts-icon.svg'
import { usePathname } from "next/navigation";

const inter = Inter({
    subsets: ['latin'],
    display: 'swap'
})

export default function RootLayout({ children }) {
    const pathname = usePathname()

    return (
        <html lang="en">
            <body className={inter.className}>
                <main className="flex w-full overflow-x-hidden">
                    <nav className="hidden lg:block w-[20%] shrink-0 bg-white border-r border-r-[#E6EFF5]">
                        <div className="flex justify-center items-center xl:h-[100px] h-[85px]">
                            <Image
                                src='/logo.svg'
                                alt="Bank Dash Logo"
                                width={183}
                                height={36}
                                className="w-[70%]"
                            />
                        </div>
                        <div className="py-2 text-lg font-medium">
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
                    <div className="flex-1">
                        {children}
                    </div>
                </main>
            </body>
        </html>
    );
}
