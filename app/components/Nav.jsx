'use client';

import Link from 'next/link';
import { Link as ScrollLink } from 'react-scroll';

const links = [
  {
    name: 'Naslovna',
    href: 'home',
  },
  {
    name: 'Usluge',
    href: 'services',
  },
  {
    name: 'O meni',
    href: 'about',
  },
  {
    name: 'Iskustvo',
    href: 'experience',
  },
  {
    name: 'Projekti',
    href: 'projects',
  },
  {
    name: 'Kontakt',
    href: 'contact',
  },
];

export const Nav = ({ containerStyles, listStyles, linkStyles }) => {
  return (
    <nav className={containerStyles}>
      <ul className={listStyles}>
        {links.map((link, idx) => {
          return (
            <li key={idx}>
              {' '}
              <ScrollLink
                to={link.href}
                smooth
                className={linkStyles}
              >
                {link.name}
              </ScrollLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
