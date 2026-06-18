'use client';

import * as React from 'react';
import { ToastProps } from '../interface/molecules/toast/toast.types';

const TOAST_LIMIT = 5;

// Global state using a simple observable pattern to avoid context overhead for triggers
let toasts: ToastProps[] = [];
const listeners: Array<(toasts: ToastProps[]) => void> = [];

const notify = () => {
  listeners.forEach((listener) => listener([...toasts]));
};

export const useToast = () => {
  const [state, setState] = React.useState<ToastProps[]>(toasts);

  React.useEffect(() => {
    listeners.push(setState);
    return () => {
      const index = listeners.indexOf(setState);
      if (index > -1) listeners.splice(index, 1);
    };
  }, []);

  const toast = (props: Omit<ToastProps, 'id'>) => {
    const id = Math.random().toString(36).substring(2, 9);
    const newToast = { ...props, id };

    toasts = [newToast, ...toasts].slice(0, TOAST_LIMIT);
    notify();

    if (props.duration !== 0) {
      setTimeout(() => {
        removeToast(id);
      }, props.duration || 5000);
    }

    return id;
  };

  const removeToast = (id: string) => {
    toasts = toasts.filter((t) => t.id !== id);
    notify();
  };

  return {
    toasts: state,
    toast,
    removeToast,
  };
};
