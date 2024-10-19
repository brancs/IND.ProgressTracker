import {
  Tooltip as ShadCnTooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { TooltipProps } from '@radix-ui/react-tooltip';

type Props = {
  trigger?: React.ReactNode;
} & TooltipProps;

function Tooltip({
  trigger,
  children,
  ...props
}: React.PropsWithChildren<Props>) {
  return (
    <ShadCnTooltip {...props} onOpenChange={props.onOpenChange}>
      <TooltipTrigger asChild>{trigger}</TooltipTrigger>
      <TooltipContent>{children}</TooltipContent>
    </ShadCnTooltip>
  );
}

export default Tooltip;
