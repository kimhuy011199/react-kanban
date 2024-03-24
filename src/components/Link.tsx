import { ReactNode } from 'react';

const Link = ({ href, children }: { href: string; children: ReactNode }) => {
  return (
    <a
      className="px-3.5 py-2.5 text-sm flex items-center gap-3 rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 border border-input bg-background hover:bg-accent hover:text-accent-foreground border-dashed"
      href={href}
    >
      {children}
    </a>
  );
};

export default Link;
