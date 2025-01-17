'use client';

import { usePathname } from 'next/navigation';
import Image from 'next/image';
import logo from '@public/logo.svg';
import Link from 'next/link';

const sections = [
    { id: "about", label: "About" },
    { id: "career", label: "Career" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
];

export function Header() {
    const pathname = usePathname();

    return (
        <header className='fixed top-0 left-0 w-full flex flex-row justify-between items-center px-48 pt-8 bg-bg'>
            <Link href="/">
                <Image src={logo} alt="Gabriel Mercante's logo"/>
            </Link>
            <nav>
                <ul className='flex space-x-8'>
                    {sections.map(({ id, label }) => (
                        <Link key={id} href={`/${id}`} className={`font-bold text-base p-4 border-b-2 cursor-pointer ${pathname === `/${id}` ? 'border-yellow' : 'border-transparent hover:border-yellow'}`}>
                            {label}
                        </Link>
                    ))}
                </ul>
            </nav>
        </header>
    );
}