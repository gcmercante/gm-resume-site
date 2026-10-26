'use client';

import { usePathname } from 'next/navigation';
import Image from 'next/image';
import logo from '@public/logo.svg';
import Link from 'next/link';
import { useState } from 'react';
import { IoClose, IoMenu } from 'react-icons/io5';

const sections = [
    { id: "about", label: "About" },
    { id: "career", label: "Career" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
];

export function Header() {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className='fixed top-0 left-0 w-full z-10 px-6 pt-4 md:px-12 md:pt-8 xl:px-48 bg-bg'>
            <div className='flex flex-row justify-between items-center'>
                <Link href="/" onClick={() => setIsMenuOpen(false)}>
                    <Image src={logo} alt="Gabriel Mercante's logo" className='w-14 h-auto md:w-20'/>
                </Link>
                <button
                    className='md:hidden text-title p-2'
                    aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                    aria-expanded={isMenuOpen}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    {isMenuOpen ? <IoClose size={28} /> : <IoMenu size={28} />}
                </button>
                <nav className='hidden md:block'>
                    <ul className='flex space-x-8'>
                        {sections.map(({ id, label }) => (
                            <Link key={id} href={`/${id}`} className={`font-bold text-base p-4 border-b-2 cursor-pointer ${pathname === `/${id}` ? 'border-yellow' : 'border-transparent hover:border-yellow'}`}>
                                {label}
                            </Link>
                        ))}
                    </ul>
                </nav>
            </div>
            {isMenuOpen && (
                <nav className='md:hidden pb-4'>
                    <ul className='flex flex-col'>
                        {sections.map(({ id, label }) => (
                            <Link key={id} href={`/${id}`} onClick={() => setIsMenuOpen(false)} className={`font-bold text-base py-3 px-2 border-l-2 cursor-pointer ${pathname === `/${id}` ? 'border-yellow' : 'border-transparent hover:border-yellow'}`}>
                                {label}
                            </Link>
                        ))}
                    </ul>
                </nav>
            )}
        </header>
    );
}
