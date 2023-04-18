import { InferGetStaticPropsType } from "next";

export const getStaticProps = async () => {
  const baconIpsum = await fetch(
    "https://baconipsum.com/api/?type=meat-and-filler&paras=5&format=text"
  );

  return {
    props: {
      baconIpsum: (await baconIpsum.text()).repeat(1000),
    },
  };
};

export default function Home(props: InferGetStaticPropsType<typeof getStaticProps>) {
  return <main>{props.baconIpsum}</main>;
}
