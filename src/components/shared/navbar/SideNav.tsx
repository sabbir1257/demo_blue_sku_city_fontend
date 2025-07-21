'use client';

import React, { useEffect, useState } from 'react';
import { navLinks, TNavLinks } from '../../../../public/datas/navbar/navbarLinks';
import { useRouter } from 'next/router'; // Use this only if you're in pages/ directory
import Link from 'next/link';
import { CrossIcon } from '@/components/Icons/Icons';

interface ChildLink {
  name: string;
  path: string;
}

interface TNavLinksWithChildren extends TNavLinks {
  children?: ChildLink[];
}

interface SideNavProps {
  setOpen: (open: boolean) => void;
}

const SideNav: React.FC<SideNavProps> = ({ setOpen }) => {
  const router = useRouter();
  const path = router?.asPath;

  const [expanded, setExpanded] = useState<string | null>(null);

  useEffect(() => {
    const handleRouteChange = () => {
      setOpen(false);
    };

    router.events.on('routeChangeStart', handleRouteChange);
    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, [router, setOpen]);

  const toggleExpand = (key: string) => {
    setExpanded((prev) => (prev === key ? null : key));
  };

  return (
    <div className="bg-blue-900 h-full w-full relative p-6">
      <ul className="text-gray-300 flex flex-col gap-4 text-lg">
        {navLinks.map((link: TNavLinksWithChildren, i: number) => {
          const isActive = path === link?.path;
          const hasChildren = link?.children?.length;

          return (
            <li key={i} className="uppercase">
              {hasChildren ? (
                <>
                  <div
                    onClick={() => toggleExpand(link.name)}
                    className={`flex justify-between items-center cursor-pointer ${
                      isActive ? 'text-white font-medium' : ''
                    }`}
                  >
                    <span>{link.name}</span>
                    <span className="text-sm">
                      {expanded === link.name ? '▲' : '▼'}
                    </span>
                  </div>
                  {expanded === link.name && (
                    <ul className="pl-4 mt-2 text-sm space-y-1">
                      {link.children?.map((child: ChildLink, j: number) => (
                        <li key={j}>
                          <Link href={child.path} className="block hover:text-white">
                            {child.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <Link
                  href={link.path}
                  className={`${isActive ? 'text-white font-medium' : ''}`}
                >
                  {link.name}
                </Link>
              )}
            </li>
          );
        })}
      </ul>

      <div
        className="absolute top-4 right-4 text-3xl text-white cursor-pointer"
        onClick={() => setOpen(false)}
      >
        <CrossIcon />
      </div>
    </div>
  );
};

export default SideNav;
