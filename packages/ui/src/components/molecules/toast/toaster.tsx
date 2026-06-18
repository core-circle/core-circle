'use client';

import { useToast } from '../../../hooks/use-toast';
import { Toast } from './toast';
import { ToasterProps } from '../../../interface/molecules/toast/toast.types';
import { cn } from '../../../utils/cn';

export const Toaster = ({ position = 'bottom-right' }: ToasterProps) => {
  const { toasts, removeToast } = useToast();

  if (toasts.length === 0) return null;

  const positionClasses = {
    'top-left': 'top-0 left-0 sm:flex-col',
    'top-right': 'top-0 right-0 sm:flex-col',
    'top-center': 'top-0 left-1/2 -translate-x-1/2 sm:flex-col items-center',
    'bottom-left': 'bottom-0 left-0 sm:flex-col-reverse',
    'bottom-right': 'bottom-0 right-0 sm:flex-col-reverse',
    'bottom-center':
      'bottom-0 left-1/2 -translate-x-1/2 sm:flex-col-reverse items-center',
  };

  return (
    <div
      className={cn(
        'fixed z-[100] flex max-h-screen w-full p-4 md:max-w-[420px] pointer-events-none',
        positionClasses[position],
      )}
    >
      <div className="flex flex-col gap-3 pointer-events-auto">
        {toasts.map((toast) => (
          <Toast
            key={toast.id}
            {...toast}
            onClose={(id) => {
              toast.onClose?.(id);
              removeToast(id);
            }}
          />
        ))}
      </div>
    </div>
  );
};
