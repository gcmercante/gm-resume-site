import { IoFilmOutline, IoFootball, IoGameController } from "react-icons/io5";

export default function About() {
  return (
    <div className="px-48 py-64 flex justify-center">
      <div className="flex flex-row gap-2 max-w-[1060px]">
        <div className="flex-1 flex flex-col p-8 gap-4">
          <h2 className="text-title font-bold text-lg">
            A brief history about me
          </h2>
          <p className="text-text text-base text-justify">
            Hi! I&apos;m Gabriel Mercante, a highly motivated Backend Engineer with over 5 years of experience building efficient, scalable, and reliable systems. My expertise lies in Node.js development, technical debt reduction, and applying best practices in design patterns to deliver high-quality, maintainable code.
            I&apos;m passionate about tackling complex challenges, ensuring data integrity in large-scale applications, and contributing to projects that make a meaningful impact. With strong communication skills in English (C1), I thrive in collaborative environments and value teamwork as a driving force for innovation.
          </p>
          <div className="flex flex-col gap-4">
            <h2 className="text-title text-base font-bold">
              Hobbies
            </h2>
            <div className="flex flex-row gap-4">
              <div className="flex flex-row gap-2 items-center text-base">
                <IoFootball size={22} />
                <p>Soccer</p>
              </div>
              <div className="flex flex-row gap-2 items-center text-base">
                <IoFilmOutline size={22} />
                <p>Series and Movies</p>
              </div>
              <div className="flex flex-row gap-2 items-center text-base">
                <IoGameController size={22} />
                <p>Games</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-4 p-8">
          <div className="flex flex-col gap-4">
            <h2 className="text-title font-bold text-lg">Skills</h2>
            <div className="flex flex-col gap-4">
              <div className="flex flex-row gap-10 items-center text-base">
                <p className="flex-1">Node.js</p>
                <div className="flex-1 w-full bg-[#202024] rounded-full h-full">
                  <div className="bg-[#7C7C8A] h-full rounded-full" style={{ width: '90%' }}></div>
                </div>
              </div>
              <div className="flex flex-row gap-10 items-center text-base">
                <p className="flex-1">React</p>
                <div className="flex-1 w-full bg-[#202024] rounded-full h-full">
                  <div className="bg-[#7C7C8A] h-full rounded-full" style={{ width: '50%' }}></div>
                </div>
              </div>
              <div className="flex flex-row gap-10 items-center text-base">
                <p className="flex-1">Java&nbsp;17+</p>
                <div className="flex-1 w-full bg-[#202024] rounded-full h-full">
                  <div className="bg-[#7C7C8A] h-full rounded-full" style={{ width: '60%' }}></div>
                </div>
              </div>
              <div className="flex flex-row gap-10 items-center text-base">
                <p className="flex-1">MongoDB</p>
                <div className="flex-1 w-full bg-[#202024] rounded-full h-full">
                  <div className="bg-[#7C7C8A] h-full rounded-full" style={{ width: '90%' }}></div>
                </div>
              </div>
              <div className="flex flex-row gap-10 items-center text-base">
                <p className="flex-1">MySQL</p>
                <div className="flex-1 w-full bg-[#202024] rounded-full h-full">
                  <div className="bg-[#7C7C8A] h-full rounded-full" style={{ width: '80%' }}></div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}