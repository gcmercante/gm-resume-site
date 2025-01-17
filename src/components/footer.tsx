import Link from "next/link";
import { IoLogoGithub, IoLogoInstagram, IoLogoTwitter } from "react-icons/io5";

export function Footer() {
    return (
        <footer className='bottom-0 left-0 w-full flex flex-row justify-between items-center px-48 pb-8 bg-bg'>
            <p className='text-text text-xs'>Designed & built by Gabriel Mercante</p>
            <div className="text-yellow flex gap-20">
                <Link href={"https://github.com/gcmercante"}>
                    <IoLogoGithub size={32} />
                </Link>
                <Link href={"https://www.instagram.com/gmercante/"}>
                    <IoLogoInstagram size={32} />
                </Link>
                <Link href={"https://x.com/g_mercante"}>
                    <IoLogoTwitter size={32} />
                </Link>
            </div>
        </footer>
    );
}