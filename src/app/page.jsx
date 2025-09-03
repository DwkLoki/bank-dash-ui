'use client'

import SearchIcon from '@/assets/search-icon.svg'
import SettingHeaderIcon from '@/assets/setting-header-icon.svg'
import NotifIcon from '@/assets/notif-icon.svg'
import Image from 'next/image'
import WeeklyActivityChart from '@/components/WeeklyActivityChart'
import ExpensePieChart from '@/components/ExpensePieChart'
import BalanceHistoryChart from '@/components/BalanceHistoryChart'
import RightArrowIcon from '@/assets/right-arrow.svg'
import SendIcon from '@/assets/send-icon.svg'
import ChipCard from '@/assets/chip-card.svg'
import ChipCardGrey from '@/assets/chip-card-grey.svg'
import CardLogo from '@/assets/card-logo.svg'
import CardDepositLogo from '@/assets/card-deposit-logo.svg'
import { AlignJustify, X } from 'lucide-react';
import { useState } from 'react';
import { usePathname } from "next/navigation";
import Link from 'next/link'
import DashboardIcon from '@/assets/dashboard-icon.svg'
import TransactionsIcon from '@/assets/transactions-icon.svg'
import AccountsIcon from '@/assets/accounts-icon.svg'

export default function Dashboard() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const pathname = usePathname()

    return (
        <div className='bg-[#F5F7FA] w-full'>
            {/* header desain laptop dan dekstop */}
            <header className="hidden lg:flex xl:h-[100px] h-[85px] w-full bg-white border-b border-b-[#E6EFF5] justify-between items-center px-10">
                <h1 className="text-[28px] font-semibold text-[#343C6A]">Overview</h1>

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
                        className='md:hidden relative w-8 h-8 flex items-center justify-center'
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

                    <h1 className="text-xl font-semibold text-[#343C6A]">Overview</h1>
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
                    md:hidden w-screen overflow-hidden transition-all duration-500 ease-in-out
                    ${isMenuOpen ? 'h-[calc(100vh-80px)] opacity-100' : 'h-0 opacity-0'}
                `}
            >
                <nav className="w-[20%] shrink-0 bg-white border-r border-r-[#E6EFF5]">
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
            </div>

            <main className='xl:p-10 p-5 w-full'>
                <section className='flex md:flex-row flex-col xl:gap-8 gap-5 w-full'>
                    <div className='flex md:w-[70%] w-full flex-col gap-3'>
                        <div className='flex md:w-full w-[80%] justify-between items-center text-[#343C6A] font-semibold'>
                            <h2 className='md:text-[22px] text-base'>My Cards</h2>
                            <h2 className='md:text-[17px] text-sm cursor-pointer'>See All</h2>
                        </div>
                        <div className='flex w-full h-[235px] bg-white rounded-3xl xl:gap-8 gap-5 overflow-hidden'>
                            {/* card #1 */}
                            <div className='relative flex flex-col w-[80%] md:w-1/2 h-full bg-gradient-to-r from-[#4C49ED] to-[#0A06F4] rounded-3xl p-5 shrink-0'>
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
                            <div className='relative flex flex-col w-[80%] md:w-1/2 h-full bg-white border border-[#DFEAF2] rounded-3xl p-5'>
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
                        <h2 className='text-[22px] font-semibold text-[#343C6A]'>Recent Transaction</h2>
                        <div className='flex flex-col justify-between w-full h-full bg-white rounded-3xl p-5'>
                            <div className='flex items-center gap-2'>
                                <CardDepositLogo className='xl:h-[55px] xl:w-[55px] h-[40px] w-[40px]' />
                                <div className='flex-1 flex justify-between items-center'>
                                    <div>
                                        <p className='text-xs font-semibold'>Deposit from my Card</p>
                                        <p className='text-xs text-[#718EBF]'>28 January 2021</p>
                                    </div>
                                    <p className='xl:text-sm text-xs text-[#FF4B4A]'>-$850</p>
                                </div>
                            </div>

                            <div className='flex items-center gap-2'>
                                <CardDepositLogo className='xl:h-[55px] xl:w-[55px] h-[40px] w-[40px]' />
                                <div className='flex-1 flex justify-between items-center'>
                                    <div>
                                        <p className='text-xs font-semibold'>Deposit Paypal</p>
                                        <p className='text-xs text-[#718EBF]'>25 January 2021</p>
                                    </div>
                                    <p className='xl:text-sm text-xs text-[#41D4A8]'>+$2,500</p>
                                </div>
                            </div>

                            <div className='flex items-center gap-2'>
                                <CardDepositLogo className='xl:h-[55px] xl:w-[55px] h-[40px] w-[40px]' />
                                <div className='flex-1 flex justify-between items-center'>
                                    <div>
                                        <p className='text-xs font-semibold'>Jemi Wilson</p>
                                        <p className='text-xs text-[#718EBF]'>21 January 2021</p>
                                    </div>
                                    <p className='xl:text-sm text-xs text-[#41D4A8]'>+$5,400</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className='flex xl:gap-8 gap-5 w-full mt-8'>
                    <div className='flex w-[70%] flex-col gap-3'>
                        <h2 className='text-[22px] font-semibold text-[#343C6A]'>Weekly Activity</h2>
                        <div className='w-full h-[322px] bg-white rounded-3xl p-7'>
                            <WeeklyActivityChart />
                        </div>
                    </div>
                    <div className='flex w-[30%] flex-col gap-3'>
                        <h2 className='text-[22px] font-semibold text-[#343C6A]'>Expense Statistics</h2>
                        <div className='w-full h-full bg-white rounded-3xl'>
                            <ExpensePieChart />
                        </div>
                    </div>
                </section>

                <section className='flex xl:gap-8 gap-5 w-full mt-8'>
                    <div className='flex w-[40%] flex-col gap-3'>
                        <h2 className='text-[22px] font-semibold text-[#343C6A]'>Quick Transfer</h2>
                        <div className='flex flex-col w-full h-full justify-center text-xs bg-white rounded-3xl p-4'>
                            <div className='flex w-full justify-between mb-10'>
                                <div className='flex xl:gap-7 gap-4'>
                                    <div className='flex flex-col gap-2 items-center'>
                                        <Image
                                            src='/person1.svg'
                                            alt="Person 1"
                                            width={50}
                                            height={50}
                                        />
                                        <div className='text-center'>
                                            <p className='text-[#232323]'>Randy Press</p>
                                            <p className='text-[#718EBF]'>Director</p>
                                        </div>
                                    </div>
                                    <div className='flex flex-col gap-2 items-center'>
                                        <Image
                                            src='/person2.svg'
                                            alt="Person 2"
                                            width={50}
                                            height={50}
                                        />
                                        <div className='text-center'>
                                            <p className='text-[#232323]'>Livia Bator</p>
                                            <p className='text-[#718EBF]'>CEO</p>
                                        </div>
                                    </div>
                                    <div className='flex flex-col gap-2 items-center'>
                                        <Image
                                            src='/person3.svg'
                                            alt="Person 3"
                                            width={50}
                                            height={50}
                                        />
                                        <div className='text-center'>
                                            <p className='text-[#232323]'>Workman</p>
                                            <p className='text-[#718EBF]'>Designer</p>
                                        </div>
                                    </div>
                                </div>

                                <div className='flex items-center'>
                                    <button className='flex justify-center items-center w-[50px] h-[50px] rounded-full shadow-2xl border border-[#DFEAF2]'>
                                        <RightArrowIcon />
                                    </button>
                                </div>
                            </div>

                            <div className='flex w-full gap-7 justify-center items-center'>
                                <p className='text-[#718EBF]'>Write Amount</p>
                                <div className='relative w-[164px] h-10 flex'>
                                    <div className='w-24 h-10 flex justify-center items-center rounded-[50px] text-[#718EBF] bg-[#EDF1F7]'>
                                        <p className='w-[70%]'>525.50</p>
                                    </div>
                                    <div className='absolute right-0 w-24 h-10 flex justify-center items-center rounded-[50px] gap-2 text-white bg-[#1814F3]'>
                                        <span className='font-medium'>Send</span>
                                        <SendIcon />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex w-[60%] flex-col gap-3'>
                        <h2 className='text-[22px] font-semibold text-[#343C6A]'>Balance History</h2>
                        <div className='w-full h-[220px] bg-white rounded-3xl p-4'>
                            <BalanceHistoryChart />
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
