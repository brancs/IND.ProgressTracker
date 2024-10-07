import { cn } from '@/lib/utils';
import { PropsWithChildren } from 'react';

type StackProps = {
  className?: string;
};

function Stack({ children, className }: PropsWithChildren<StackProps>) {
  return (
    <div className={cn(['flex flex-col gap-4', className])}>{children}</div>
  );
}
export default Stack;
