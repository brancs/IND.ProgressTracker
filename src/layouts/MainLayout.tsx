import { PropsWithChildren } from 'react';

function MainLayout({ children }: PropsWithChildren) {
  return <div className="mx-auto max-w-3xl px-4 py-6 md:px-0">{children}</div>;
}
export default MainLayout;
