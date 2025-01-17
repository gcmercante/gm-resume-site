import request from "graphql-request";

const query = `
  query ($username: String!) {
    user(login: $username) {
      pinnedItems(first: 6, types: REPOSITORY) {
        nodes {
          ... on Repository {
            id
            name
            description
            url
            primaryLanguage {
              name
            }
            stargazerCount
            forkCount
            collaborators(first: 10) {
              totalCount
            }
          }
        }
      }
    }
  }
`;

interface GithubUser {
    pinnedItems: GithubPinnedItem;
}

interface GithubPinnedItem {
    nodes: GithubNode[];
}

export interface GithubNode {
    id: string;
    name: string;
    description: string;
    url: string;
    primaryLanguage: {
        name: string;
    };
    stargazerCount: number;
    forkCount: number;
    collaborators: {
        totalCount: number;
    };
}

export default async function getPinnedRepos() {
    const endpoint = "https://api.github.com/graphql";

    try {
        const response = await request(endpoint, query, { username: process.env.GITHUB_USER }, {
          Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        }) as { user: GithubUser };
    
        return response.user.pinnedItems.nodes;
      } catch (error) {
        console.error('Error fetching pinned repositories:', error);
        return [];
      }
}