import { CardGrid } from "@/components/card-grid";

export default function Projects() {
    return (
        <div className="flex w-full">
            <div className="flex flex-col gap-8 m-auto">
                <h1 className="text-title text-xl font-bold leading-tight">What I’ve been working on</h1>
                <CardGrid />
            </div>
        </div>
    )
}