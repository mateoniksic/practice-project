import Link from 'next/link';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const socials = [
  {
    icon: <FaLinkedin />,
    path: 'https://www.linkedin.com/in/mateoniksic/',
    ariaLabel: 'LinkedIn',
  },
  {
    icon: <FaGithub />,
    path: 'https://github.com/mateoniksic',
    ariaLabel: 'Github',
  },
];

export const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, idx) => {
        return (
          <Link
            href={item.path}
            key={idx}
            className={iconStyles}
            target='_blank'
            aria-label={item.ariaLabel}
          >
            <span>{item.icon}</span>
          </Link>
        );
      })}
    </div>
  );
};
