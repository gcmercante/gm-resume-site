import Link from "next/link";
import { IoLogoLinkedin, IoLogoWhatsapp, IoMail } from "react-icons/io5";

export default function Contact() {
    return (
        <div className="flex flex-col justify-center items-center gap-12 md:gap-20">
            <h1 className="text-title text-[2.75rem] md:text-hero font-bold leading-none text-center">Get In Touch</h1>
            <div className="text-yellow flex justify-between gap-12 md:gap-36">
                <Link href="mailto:gmercante23@gmail.com">
                    <IoMail size={64} />
                </Link>
                <Link href={"https://www.linkedin.com/in/gabriel-mercante/"}>
                    <IoLogoLinkedin size={64} />
                </Link>
                <Link href={"https://wa.me/351965689622"}>
                    <IoLogoWhatsapp size={64} />
                </Link>
            </div>
        </div>
    )
}