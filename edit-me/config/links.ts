import { CMSLink } from '@config-types/cms-link';
import {
  SiGithub,
  SiLinkedin,
} from '@icons-pack/react-simple-icons';

export const links: CMSLink[] = [
  {
    href: 'https://www.linkedin.com/in/johntday',
    icon: SiLinkedin,
    title: 'LinkedIn',
  },
  {
    href: 'https://github.com/johntday',
    icon: SiGithub,
    title: 'GitHub',
  },
  // {
  //   href: 'https://www.npmjs.com',
  //   icon: SiNpm,
  //   title: 'NPM',
  // },
  // {
  //   href: 'https://bsky.app',
  //   icon: SiBluesky,
  //   title: 'Bluesky',
  // },
  // {
  //   href: 'https://www.instagram.com',
  //   icon: SiInstagram,
  //   title: 'Instagram',
  // },
];
