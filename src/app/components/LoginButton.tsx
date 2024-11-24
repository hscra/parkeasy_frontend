"use client";

import React from 'react';
import Button from '@mui/material/Button';
import { useRouter } from 'next/navigation';

interface LoginButtonProps {
  label: string;
  variant?: 'text' | 'outlined' | 'contained';
  color?: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
  disabled?: boolean;
}

const LoginButton: React.FC<LoginButtonProps> = ({
  label,
  variant = 'contained',
  color = 'primary',
  disabled = false,
}) => {
  const router = useRouter();

  const handleClick = () => {
    router.push('/signin');
  };

  return (
    <Button
      variant={variant}
      color={color}
      onClick={handleClick}
      disabled={disabled}
    >
      {label}
    </Button>
  );
};

export default LoginButton;
