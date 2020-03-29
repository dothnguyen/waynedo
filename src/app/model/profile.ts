export interface Profile {
	name: string;
	position: string;
	email: string;
	mobile: string;
	profileImg: string;

	socials: SocialLink[];
}

export interface CareerSummary {
	title: string;
	summary: string;
}

export interface WorkExperience {
	title: string;
	companyName: string;
	companyUrl: string;
	yearFrom: string;
	yearTo: string;
	roleDesc: string;
	achivements?: string;
	technologies?: Array<string>;
}

export interface SocialLink {
	link: string;
	url: string;
	faIconClass: string;
}
