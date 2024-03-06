import { styled } from "@mui/material"

export const HelperText = styled('p')(({ theme }) => ({
  position: 'absolute',
  bottom: '-40px',
  left: 0,
  color: `${theme.palette.error.main}`,
}))

export const FormFieldContainer = styled('div')({
  position: 'relative',
  display: 'flex',
  gap: '10px', 
  alignItems: 'center', 
  justifyContent: 'center',
})

export const FormContainer = styled('div')({
  display: 'flex',
  marginBottom: '50px',
  alignItems: 'center', 
  justifyContent: 'center',
})