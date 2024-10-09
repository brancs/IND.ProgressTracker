import { Button } from '@/components/ui/button';
import {
  DrawerContent,
  DrawerTrigger,
  Drawer as ShadCnDrawer,
} from '@/components/ui/drawer';
import { PropsWithChildren } from 'react';

type DrawerProps = {
  triggerLabel: string;
  open: boolean;
  setOpen: (open: boolean) => void;
};

function Drawer({
  triggerLabel = 'open',
  open,
  setOpen,
  children,
}: PropsWithChildren<DrawerProps>) {
  return (
    <ShadCnDrawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button type="button">{triggerLabel}</Button>
      </DrawerTrigger>
      <DrawerContent>{children}</DrawerContent>
    </ShadCnDrawer>
  );
}

export default Drawer;
