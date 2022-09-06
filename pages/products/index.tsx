import { prisma } from "../../server/db/client";
import { Product } from "./types";

type Props = {
  products: Product[];
};

function Products({ products }: Props) {
  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>{product.name}</li>
      ))}
    </ul>
  );
}

export async function getServerSideProps() {
  const products = await prisma.product.findMany();

  return { props: { products } };
}

export default Products;
