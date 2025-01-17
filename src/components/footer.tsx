import { IoLogoGithub, IoLogoInstagram, IoLogoTwitter } from "react-icons/io5";

export function Footer() {
    return (
        <footer className='bottom-0 left-0 w-full flex flex-row justify-between items-center px-48 pb-8 bg-bg'>
            <p className='text-text text-xs'>Designed & built by Gabriel Mercante</p>
            <div className="text-yellow flex gap-20">
                <IoLogoGithub size={32} />
                <IoLogoInstagram size={32} />
                <IoLogoTwitter size={32} />
            </div>
        </footer>
    );
}