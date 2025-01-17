import getPinnedRepos from "@/app/api/getPinnedRepos";
import { Card } from "./card";

export async function CardGrid() {
    const result = await getPinnedRepos();

    return (
        <div className="flex">
            <div className="grid grid-cols-3 gap-8 w-full items-center justify-center">
                {
                    result.map((repo) => (
                        <Card key={repo.id} repo={repo} />
                    ))
                }
            </div>
        </div>
    )
}