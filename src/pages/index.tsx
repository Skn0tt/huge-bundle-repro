import { InferGetStaticPropsType } from "next";
import styles from "../styles/Home.module.css"

export const getStaticProps = async () => {
  const baconIpsum = await fetch(
    "https://baconipsum.com/api/?type=meat-and-filler&paras=5&format=text"
  );

  return {
    props: {
      baconIpsum: (await baconIpsum.text()).repeat(100),
    },
  };
};

export default function Home(props: InferGetStaticPropsType<typeof getStaticProps>) {
  return <main className={styles.main}>{props.baconIpsum}</main>;
}
