import Link from "next/link";
import { IoLogoFigma, IoLogoGithub, IoLogoInstagram, IoLogoTwitter } from "react-icons/io5";

export function Footer() {
    return (
        <footer className='w-full flex flex-col-reverse gap-4 md:flex-row justify-between items-center px-6 pb-6 md:px-12 md:pb-8 xl:px-48 bg-bg'>
            <p className='text-text text-xs'>Designed & built by Gabriel Mercante</p>
            <div className="text-yellow flex gap-10 md:gap-20">
                <Link href={"https://github.com/gcmercante"}>
                    <IoLogoGithub size={32} />
                </Link>
                <Link href={"https://www.instagram.com/gmercante/"}>
                    <IoLogoInstagram size={32} />
                </Link>
                <Link href={"https://x.com/g_mercante"}>
                    <IoLogoTwitter size={32} />
                </Link>
                <Link href={"https://www.figma.com/design/xrOk5U2aGOZugFdiSzVUe5/Portfolio-v1?node-id=0-1&t=eUd2mhJe6w3ivnr8-1"}>
                    <IoLogoFigma size={32} />
                </Link>
            </div>
        </footer>
    );
}