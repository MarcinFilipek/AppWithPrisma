import { InferGetStaticPropsType } from "next";
import { prisma } from "../../server/db/client";

export async function getStaticProps() {
  const products = await prisma.product.findMany();

  return { props: { products } };
}

function Products({
  products,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>{product.name}</li>
      ))}
    </ul>
  );
}

export default Products;
