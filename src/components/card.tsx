import Image from "next/image";
import githubLogo from "@public/github.svg";
import { IoGitNetwork, IoLogoGithub, IoPeopleSharp, IoStarOutline } from "react-icons/io5";
import Link from "next/link";
import { GithubNode } from "@/app/api/getPinnedRepos";

interface CardProps {
    repo: GithubNode;
}

export function Card({ repo }: CardProps) {
    return (
        <div className="bg-card text-text max-w-[25rem] min-w-[25rem] rounded-md">
            <Image src={githubLogo} alt="Github logo" className="rounded-t-md" />
            <div className="flex flex-col gap-4 p-4">
                <h2 className="text-title text-base">{repo.name}</h2>
                <p className="text-subtext text-xs">{repo.description}</p>
                <div className="flex justify-between items-center">
                    <div className="flex gap-4 text-sm text-subtext">
                        <div className="flex gap-2 items-center">
                            <IoPeopleSharp />
                            <p className="">{repo.collaborators.totalCount}</p>
                        </div>
                        <div className="flex gap-2 items-center">
                            <IoStarOutline />
                            <p className="">{repo.stargazerCount}</p>
                        </div>
                        <div className="flex gap-2 items-center">
                            <IoGitNetwork />
                            <p className="">{repo.forkCount}</p>
                        </div>
                    </div>
                    <Link href={repo.url} className="text-sm text-subtext">
                        <IoLogoGithub />
                    </Link>
                </div>
            </div>
        </div>
    )
}