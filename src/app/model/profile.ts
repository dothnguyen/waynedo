export interface Profile {
  name: string;
  position: string;
  email: string;
  mobile: string;
  profileImg: string;

  socials: SocialLink[];
}

export interface SocialLink {
  link: string;
  url: string;
  faIconClass: string;
}

