import {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
  NextPage,
} from "next";
import { prisma } from "../../server/db/client";
import { ParsedUrlQuery } from "querystring";

type Product = {
  name: string;
  id: number;
  description: string;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const products = await prisma.product.findMany();

  const paths = products.map((product) => ({
    params: { id: product.id.toString() },
  }));

  return { paths, fallback: false };
};

type ContextParams = {
  id: string;
};

type PageProps = {
  product: Product | null;
};

export const getStaticProps: GetStaticProps<PageProps, ContextParams> = async ({
  params,
}) => {
  if (params) {
    const product = await prisma.product.findUnique({
      where: {
        id: +params.id,
      },
    });
    return { props: { product } };
  }
  return { props: { product: null } };
};

const ProductPage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  product,
}) => {
  if (product) {
    return <p>{product.description}</p>;
  }
  return <p>Error</p>;
};

export default ProductPage;
