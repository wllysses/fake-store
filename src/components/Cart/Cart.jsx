import * as React from 'react';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { styled } from '@mui/material/styles';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

export function ShoppingCart({ cartValue }) {
  
  return (
    <IconButton aria-label="cart" sx={{color: 'white'}} title={`${cartValue > 1 ? `${cartValue} itens adicionados` : `${cartValue} item adicionado`}`}>
      <StyledBadge badgeContent={cartValue} color="primary">
        <ShoppingCartIcon />
      </StyledBadge>
      <span style={{marginLeft: 20, fontSize: 18}}>Shopping Cart</span>
    </IconButton>
  );
}