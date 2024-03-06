/* eslint-disable import/named */
import {Box, List, ListItem, SxProps, Theme, styled} from '@mui/material'

export const StyledList = styled(List)({
  padding: '0 20px',
  marginLeft: 'auto',
  marginRight: 'auto',
  maxWidth: '500px',
})

export const StyledListItem = styled(ListItem)(({ theme }) => ({
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  borderRadius: '8px',
  marginBottom: '8px',
  padding: '10px',
  transition: 'box-shadow 0.3s ease-in-out',
  height: '60px',
  '&:hover': {
    boxShadow: `0 4px 8px ${theme.palette.success.light}`,
  },
}))

export const StyledBox = styled(Box)({
  borderRadius: '8px',
  marginBottom: '8px',
})

export const checkboxStyles = ({ theme }: { theme: Theme }): SxProps<Theme>  => ({
  '&.Mui-checked': {
    color: theme.palette.success.main,
  },
})