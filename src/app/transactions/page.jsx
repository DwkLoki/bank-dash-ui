'use client'

import SearchIcon from '@/assets/search-icon.svg'
import SettingHeaderIcon from '@/assets/setting-header-icon.svg'
import NotifIcon from '@/assets/notif-icon.svg'
import Image from 'next/image'
import ChipCard from '@/assets/chip-card.svg'
import ChipCardGrey from '@/assets/chip-card-grey.svg'
import CardLogo from '@/assets/card-logo.svg'
import { AlignJustify, X } from 'lucide-react';
import { useState, useEffect, useMemo } from 'react';
import { usePathname } from "next/navigation";
import Link from 'next/link'
import DashboardIcon from '@/assets/dashboard-icon.svg'
import TransactionsIcon from '@/assets/transactions-icon.svg'
import AccountsIcon from '@/assets/accounts-icon.svg'
import MonthlyExpenseChart from '@/components/MonthlyExpenseChart'
import Pagination from '@/components/Pagination'
import { sliceItems } from '@/components/Pagination'

// dummy data untuk pagination
const mock = [
    { id: 1, desc: "Spotify Subscription", type: "Shopping", card: "1234 ****", date: "28 Jan, 12.30 AM", amount: -2500 },
    { id: 2, desc: "Freepik Sales", type: "Transfer", card: "1234 ****", date: "25 Jan, 10.40 PM", amount: 750 },
    { id: 3, desc: "Mobile Service", type: "Service", card: "1234 ****", date: "20 Jan, 10.40 PM", amount: -150 },
    { id: 4, desc: "Wilson", type: "Transfer", card: "1234 ****", date: "15 Jan, 03.29 PM", amount: -1050 },
    { id: 5, desc: "Emilly", type: "Transfer", card: "1234 ****", date: "14 Jan, 10.40 PM", amount: 840 },
    // tambahkan data lagi untuk demo pagination
    ...Array.from({ length: 20 }, (_, i) => ({
        id: 6 + i,
        desc: `Extra Row #${i + 1}`,
        type: ["Shopping", "Transfer", "Service"][i % 3],
        card: "1234 ****",
        date: "10 Jan, 08.00 PM",
        amount: (i % 2 ? 1 : -1) * (100 + i * 17)
    }))
];

export default function TransactionsPage() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [activeTab, setActiveTab] = useState('transactions') // transaction | income | expense
    const pathname = usePathname()
    //untuk pagination
    const [page, setPage] = useState(1);
    const pageSize = 5; // jumlah baris dalam satu halaman
    const total = mock.length;
    const rows = useMemo(() => sliceItems(mock, page, pageSize), [page, pageSize]);

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
                <h1 className="text-[28px] font-semibold text-[#343C6A]">Transactions</h1>

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

                    <h1 className="text-xl font-semibold text-[#343C6A]">Transactions</h1>
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
                <section className='flex md:flex-row flex-col xl:gap-8 gap-5 w-full'>
                    <div className='flex md:w-[70%] w-full flex-col gap-3'>
                        <div className='flex w-full justify-between items-center text-[#343C6A] font-semibold'>
                            <h2 className='md:text-[22px] text-base'>My Cards</h2>
                            <h2 className='md:text-[17px] text-sm cursor-pointer'>+ Add Card</h2>
                        </div>
                        <div className='flex md:flex-row flex-col w-full md:h-[235px] h-auto bg-white rounded-3xl xl:gap-8 gap-5'>
                            {/* card #1 */}
                            <div className='relative flex flex-col w-full md:w-1/2 h-[235px] bg-gradient-to-r from-[#4C49ED] to-[#0A06F4] rounded-3xl p-5'>
                                <div className='flex justify-between mb-7'>
                                    <div className='text-white'>
                                        <p className='text-xs'>Balance</p>
                                        <p className='text-xl font-semibold'>$5,756</p>
                                    </div>
                                    <ChipCard />
                                </div>
                                <div className='flex xl:gap-16 gap-10'>
                                    <div className='text-white'>
                                        <p className='text-xs text-white/70'>CARD HOLDER</p>
                                        <p className='text-sm font-semibold'>Eddy Cusuma</p>
                                    </div>
                                    <div className='text-white'>
                                        <p className='text-xs text-white/70'>VALID THRU</p>
                                        <p className='text-sm font-semibold'>12/22</p>
                                    </div>
                                </div>
                                <div className='absolute flex justify-between items-center bottom-0 left-0 text-white w-full h-[70px] bg-gradient-to-b from-[#FFFFFF]/20 to-[#FFFFFF]/0 rounded-b-3xl px-5'>
                                    <p className='xl:text-xl text-base font-semibold'>3778 **** **** 1234</p>
                                    <CardLogo />
                                </div>
                            </div>

                            {/* card #2 */}
                            <div className='relative flex flex-col w-full md:w-1/2 h-[235px] bg-white border border-[#DFEAF2] rounded-3xl p-5'>
                                <div className='flex justify-between mb-7'>
                                    <div>
                                        <p className='text-xs text-[#718EBF]'>Balance</p>
                                        <p className='text-xl text-[#343C6A] font-semibold'>$5,756</p>
                                    </div>
                                    <ChipCardGrey />
                                </div>
                                <div className='flex xl:gap-16 gap-10'>
                                    <div>
                                        <p className='text-xs text-[#718EBF]'>CARD HOLDER</p>
                                        <p className='text-sm text-[#343C6A] font-semibold'>Eddy Cusuma</p>
                                    </div>
                                    <div>
                                        <p className='text-xs text-[#718EBF]'>VALID THRU</p>
                                        <p className='text-sm text-[#343C6A] font-semibold'>12/22</p>
                                    </div>
                                </div>
                                <div className='absolute flex justify-between items-center bottom-0 left-0 text-[#343C6A] w-full h-[70px] border-t border-t-[#DFEAF2] rounded-b-3xl px-5'>
                                    <p className='xl:text-xl text-base font-semibold'>3778 **** **** 1234</p>
                                    <CardLogo />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex md:w-[30%] w-full flex-col gap-3'>
                        <h2 className='md:text-[22px] text-base font-semibold text-[#343C6A]'>My Expense</h2>
                        <div className='w-full md:h-full h-[250px] bg-white rounded-3xl p-5'>
                            <MonthlyExpenseChart />
                        </div>
                    </div>
                </section>

                <section className='w-full mt-8'>
                    <div className='flex w-full flex-col gap-3'>
                        <h2 className='md:text-[22px] text-base font-semibold text-[#343C6A]'>Recent Transactions</h2>

                        <div className='flex w-full font-medium text-[#718EBF] border-b-2 border-[#EBEEF2]'>
                            <button
                                className={`h-10 w-28 md:h-14 md:w-36 text-xs md:text-base md:border-b-4 border-b-2 cursor-pointer hover:text-[#1814F3] ${activeTab === 'transactions' ? 'border-[#1814F3]' : 'border-[#F5F7FA]'}`}
                                onClick={() => setActiveTab('transactions')}
                            >
                                All Transactions
                            </button>
                            <button
                                className={`h-10 w-28 md:h-14 md:w-36 text-xs md:text-base md:border-b-4 border-b-2 cursor-pointer hover:text-[#1814F3] ${activeTab === 'income' ? 'border-[#1814F3]' : 'border-[#F5F7FA]'}`}
                                onClick={() => setActiveTab('income')}
                            >
                                Income
                            </button>
                            <button
                                className={`h-10 w-28 md:h-14 md:w-36 text-xs md:text-base md:border-b-4 border-b-2 cursor-pointer hover:text-[#1814F3] ${activeTab === 'expense' ? 'border-[#1814F3]' : 'border-[#F5F7FA]'}`}
                                onClick={() => setActiveTab('expense')}
                            >
                                Expense
                            </button>
                        </div>

                        <div className="w-full bg-white rounded-3xl py-2 px-4">
                            <div className="overflow-x-auto">
                                <table className="min-w-full text-sm">
                                    <thead>
                                        <tr className="text-left text-[#718EBF]">
                                            <th className="px-4 py-3 font-medium">Description</th>
                                            <th className="px-4 py-3 font-medium hidden md:table-cell">Transaction ID</th>
                                            <th className="px-4 py-3 font-medium hidden md:table-cell">Type</th>
                                            <th className="px-4 py-3 font-medium hidden xl:table-cell">Card</th>
                                            <th className="px-4 py-3 font-medium hidden md:table-cell">Date</th>
                                            <th className="px-4 py-3 font-medium">Amount</th>
                                            <th className="px-4 py-3 font-medium hidden xl:table-cell">Receipt</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-[#E6EFF5]">
                                        {rows.map((r) => (
                                            <tr key={r.id} className="text-[#232323]">
                                                <td className="px-4 py-4 flex items-center gap-2">
                                                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-[#718EBF] text-[#718EBF]">
                                                        {r.amount < 0 ? "↑" : "↓"}
                                                    </span>
                                                    {r.desc}
                                                </td>
                                                <td className="px-4 py-4 hidden md:table-cell">#12548796</td>
                                                <td className="px-4 py-4 hidden md:table-cell">{r.type}</td>
                                                <td className="px-4 py-4 hidden xl:table-cell">{r.card}</td>
                                                <td className="px-4 py-4 hidden md:table-cell">{r.date}</td>
                                                <td className={`px-4 py-4 font-medium ${r.amount < 0 ? "text-[#FE5C73]" : "text-[#16DBAA]"}`}>
                                                    {r.amount < 0 ? "-" : "+"}${Math.abs(r.amount).toLocaleString()}
                                                </td>
                                                <td className="px-4 py-4 hidden xl:table-cell">
                                                    <button className="px-4 py-1 rounded-full border border-[#1814F3] text-[#1814F3] hover:bg-blue-50">
                                                        Download
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            {/* Pagination */}
                            {/* <div className="mt-4">
                                <Pagination
                                    totalItems={total}
                                    pageSize={pageSize}
                                    currentPage={page}
                                    onPageChange={setPage}
                                    maxButtons={7}
                                />
                            </div> */}
                        </div>

                        {/* Pagination tampilan tablet ke atas*/}
                        <div className="hidden md:block mt-4">
                            <Pagination
                                totalItems={total}
                                pageSize={pageSize}
                                currentPage={page}
                                onPageChange={setPage}
                                maxButtons={7}
                            />
                        </div>

                        {/* Pagination tampilan mobile*/}
                        <div className="md:hidden mt-4">
                            <Pagination
                                totalItems={total}
                                pageSize={pageSize}
                                currentPage={page}
                                onPageChange={setPage}
                                maxButtons={2}
                            />
                        </div>

                        {/* 
                        <div className='w-full h-[397px] bg-white rounded-3xl p-7'>

                        </div> */}
                    </div>
                </section>
            </main>
        </div>
    );
}