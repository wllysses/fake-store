import * as React from 'react';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

export function ShoppingCart() {
  return (
    <IconButton aria-label="cart" sx={{color: 'white'}} title="Função Indisponível">
      <StyledBadge badgeContent={'0'} color="secondary">
        <ShoppingCartIcon />
      </StyledBadge>
      <span style={{marginLeft: 20, fontSize: 18}}>Shopping Cart</span>
    </IconButton>
  );
}