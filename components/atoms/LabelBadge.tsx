import { cn } from '@/utils/cn';
import { ReactNode } from 'react';

// Props Interface :typescript
interface LabelBadgeProps {
  children: ReactNode;
  className?: string;
}

const LabelBadge = ({ children, className }: LabelBadgeProps) => {
  return (
    <p className={cn('text-sm font-semibold text-orange-500', className)}>
      {children}
    </p>
  );
};

export default LabelBadge;
