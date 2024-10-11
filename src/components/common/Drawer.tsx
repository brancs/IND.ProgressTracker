import { Button } from '@/components/ui/button';
import {
  DrawerContent,
  DrawerTrigger,
  Drawer as ShadCnDrawer,
} from '@/components/ui/drawer';
import { PropsWithChildren, ReactNode } from 'react';

type DrawerProps = {
  triggerLabel?: string;
  open: boolean;
  setOpen: (open: boolean) => void;
  customTrigger?: ReactNode;
};

function Drawer({
  triggerLabel,
  customTrigger,
  open,
  setOpen,
  children,
}: PropsWithChildren<DrawerProps>) {
  return (
    <ShadCnDrawer open={open} onOpenChange={setOpen}>
      {customTrigger}
      {triggerLabel && (
        <DrawerTrigger asChild>
          <Button type="button">{triggerLabel}</Button>
        </DrawerTrigger>
      )}
      <DrawerContent>
        <div className="mx-auto w-full max-w-3xl">{children}</div>
      </DrawerContent>
    </ShadCnDrawer>
  );
}

export default Drawer;
