import React from 'react';
import Button from '@mui/material/Button';

interface LoginButtonProps {
  label: string;
  variant?: 'text' | 'outlined' | 'contained';
  color?: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
  onClick?: () => void;
  disabled?: boolean;
}

const LoginButton: React.FC<LoginButtonProps> = ({
  label,
  variant = 'contained',
  color = 'primary',
  onClick,
  disabled = false,
}) => {
  return (
    <Button
      variant={variant}
      color={color}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </Button>
  );
};

export default LoginButton;
