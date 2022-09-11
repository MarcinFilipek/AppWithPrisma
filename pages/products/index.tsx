import { InferGetStaticPropsType } from 'next'
import { prisma } from '../../server/db/client'
import { Grid, Paper, Typography, Box } from '@mui/material'
import Link from 'next/link'

export async function getStaticProps() {
  const products = await prisma.product.findMany()

  return { props: { products } }
}

function Products({
  products,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Typography variant="h3" sx={{ pb: 3 }}>
        Products
      </Typography>
      <Grid container>
        {products.map((product) => (
          <Grid item key={product.id} lg={3}>
            <Link href={`/products/${product.id}`}>
              <Paper sx={{ p: 2, cursor: 'pointer' }}>
                <Typography variant="h6" sx={{ pb: 2 }}>
                  {product.name}
                </Typography>
                <Box
                  sx={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'end',
                  }}
                >
                  <Typography
                    variant="body1"
                    sx={{ color: 'gray', fontWeight: 700 }}
                  >
                    {product.price}
                  </Typography>
                </Box>
              </Paper>
            </Link>
          </Grid>
        ))}
      </Grid>
    </>
  )
}

export default Products
