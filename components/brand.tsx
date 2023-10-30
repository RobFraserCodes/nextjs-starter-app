import React, {useState} from "react";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/20/solid";
import { Button } from "./ui/button";

export default function Brand() {
    const [state, setState] = useState(false);

    return (
        <div className="flex items-center justify-between py-5 md:block">
            <Link href="/">
                <h1>NxtJS<span className="text-primary">UI</span></h1>
            </Link>
            <div className="md:hidden">
                <Button onClick={() => setState(!state)} className='menu-btn'>
                    { state ? (
                            <XMarkIcon className='w-6 h-6' />
                        ) : (
                            <Bars3Icon className='w-6 h-6' />
                    )}
                </Button>
            </div>
        </div>
    );
}
