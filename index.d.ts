declare const gitRemoteOriginUrl: {
	getUrl: () => string;
};

declare const gitRepoName: () => string;

declare const dotenv: {
	config: () => void;
};

declare class Secrets {
	constructor(repoOwner: string, repoName: string);
	set(key: string, value: string): Promise<void>;
}

declare const set: Secrets;
