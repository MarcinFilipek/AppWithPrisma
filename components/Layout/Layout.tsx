import { Container } from '@mui/system'
import { Box, Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'

type Props = {
  children: React.ReactNode
}

export const Layout = ({ children }: Props) => (
  <Container
    maxWidth="lg"
    sx={{
      boxShadow: '8px 8px 24px 0px rgba(66, 68, 90, 1)',
      borderRadius: '25px',
      p: 2,
    }}
  >
    <Box sx={{ display: 'flex', gap: 1 }}>
      <Link href={'/'}>
        <Typography variant="body1" sx={{ cursor: 'pointer' }}>
          Homepage
        </Typography>
      </Link>
      <Link href={'/products'}>
        <Typography variant="body1" sx={{ cursor: 'pointer' }}>
          Products
        </Typography>
      </Link>
    </Box>
    {children}
  </Container>
)
