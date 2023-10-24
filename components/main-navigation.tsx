'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link';
import { mainNavigation } from '@/config/site';
import { Bars3Icon, XMarkIcon, ArrowRightIcon } from '@heroicons/react/20/solid';
import { Button } from './ui/button';

export default function MainNavigation() {
    const [state, setState] = useState(false)
    const navigation = mainNavigation;

    useEffect(() => {
        const handleClick = (e: Event) => {
            const target = e.target as HTMLElement;
            if (!target.closest(".menu-btn")) setState(false);
    }});
    
    const Brand = () => (
        <div className="flex items-center justify-between py-5 md:block">
            <Link href="/">
                <h1>NxtJS<span className="text-indigo-600">UI</span></h1>
            </Link>
            <div className="md:hidden">
                <Button onClick={() => setState(!state)} className='menu-btn'>
                    { state ? (
                            <XMarkIcon className='w-6 h-6' />
                        ) : (
                            <Bars3Icon className='w-6 h-6' />
                        )
                    }
                </Button>
            </div>
        </div>
    )

    return (
        <div className='relative'>
            <div className='absolute inset-0 blur-xl h-[580px]' style={{ background: "linear-gradient(143.6deg, rgba(192, 132, 252, 0) 20.79%, rgba(232, 121, 249, 0.26) 40.92%, rgba(204, 171, 238, 0) 70.35%)" }}></div>
            <div className='relative'>
                <header>
                    <div className={`md:hidden ${state ? "mx-2 pb-5" : "hidden"}`}>
                        <Brand />
                    </div>
                    <nav className={`pb-5 md:text-sm ${state ? "absolute top-0 inset-x-0 bg-black shadow-lg rounded-xl border mx-2 mt-2 md:shadow-none md:border-none md:mx-0 md:mt-0 md:relative md:bg-transparent" : ""}`}>
                        <div className="gap-x-14 items-center max-w-screen-xl mx-auto px-4 md:flex md:px-8">
                            <Brand />
                            <div className={`flex-1 items-center mt-8 md:mt-0 md:flex ${state ? 'block' : 'hidden'} `}>
                                <ul className="flex-1 justify-center items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
                                    { navigation.map((item, idx) => {
                                            return (
                                                <li key={idx} className="">
                                                    <a href={item.path} className="block">
                                                        {item.title}
                                                    </a>
                                                </li>
                                            )
                                        })}
                                </ul>
                                <div className="items-center justify-end mt-6 space-y-6 md:flex md:mt-0">
                                    <Link href="javascript:void(0)" className="flex items-center justify-center gap-x-1 py-2 px-4 md:inline-flex">
                                        <Button>Sign in <ArrowRightIcon className='w-6 h-6' /></Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </nav>
                </header>
            </div>
        </div>
    )
}