import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-semibold ring-offset-white transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:scale-105 active:scale-95',
  {
    variants: {
      variant: {
        default:
          'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-medium hover:shadow-large dark:ring-offset-slate-950 dark:focus-visible:ring-blue-500',
        destructive:
          'bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white shadow-medium hover:shadow-large dark:ring-offset-slate-950 dark:focus-visible:ring-red-500',
        outline:
          'border-2 border-slate-200 bg-white/10 backdrop-blur-sm hover:bg-white/20 hover:text-slate-900 dark:border-slate-700 dark:bg-slate-800/50 dark:hover:bg-slate-700/50 dark:hover:text-slate-50 dark:focus-visible:ring-slate-300',
        secondary:
          'bg-gradient-to-r from-slate-100 to-slate-200 text-slate-900 hover:from-slate-200 hover:to-slate-300 shadow-soft hover:shadow-medium dark:bg-slate-800 dark:text-slate-50 dark:hover:bg-slate-700 dark:focus-visible:ring-slate-300',
        ghost:
          'hover:bg-slate-100/80 hover:text-slate-900 dark:hover:bg-slate-800/80 dark:hover:text-slate-50 dark:focus-visible:ring-slate-300',
        link: 'text-slate-900 underline-offset-4 hover:underline dark:text-slate-50',
        success:
          'bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white shadow-medium hover:shadow-large dark:ring-offset-slate-950 dark:focus-visible:ring-green-500',
        warning:
          'bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white shadow-medium hover:shadow-large dark:ring-offset-slate-950 dark:focus-visible:ring-yellow-500',
        premium:
          'bg-gradient-to-r from-purple-500 via-pink-500 to-purple-600 hover:from-purple-600 hover:via-pink-600 hover:to-purple-700 text-white shadow-medium hover:shadow-large dark:ring-offset-slate-950 dark:focus-visible:ring-purple-500',
      },
      size: {
        default: 'h-11 px-6 py-3',
        sm: 'h-9 rounded-lg px-4 py-2',
        lg: 'h-12 rounded-xl px-10 py-4 text-base',
        xl: 'h-14 rounded-2xl px-12 py-5 text-lg',
        icon: 'size-11 rounded-xl',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
