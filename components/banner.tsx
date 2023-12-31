'use client'

import React, { useState} from 'react'
import Link from 'next/link'
import { Button } from './ui/button'
import { XMarkIcon, ArrowRightIcon } from '@heroicons/react/24/outline'
import { ThemeToggle } from './theme-toggle'

export default function Banner() {
    const [isVisibile, setIsVisible] = useState(true)

    const handleDismiss = () => {
        setIsVisible(false)
    }

    if (!isVisibile) return null;

    return (
        <div className="bg-accent">
            <div className="max-w-screen-xl mx-auto px-4 py-3 flex items-start justify-between text-white sm:items-center md:px-8">
                <div className="flex-1 justify-center flex items-start gap-x-4 sm:items-center">
                    <div className="flex-none p-1.5 px-4 rounded-full bg-accent-foreground flex items-center justify-center font-medium text-sm">
                        News
                    </div>
                    <p>We just launched a new version of our library! 
                        <Link href="javascript:(0)" className="font-semibold underline duration-150 hover:text-primary inline-flex items-center ml-4">
                            Learn more <ArrowRightIcon className="w-4 h-4" />
                        </Link>
                    </p>
                    <ThemeToggle />
                </div>
                <Button onClick={handleDismiss} className='bg-accent-foreground'>
                    <XMarkIcon className="w-4 h-4" />
                </Button>
            </div>
        </div>
    )
}
