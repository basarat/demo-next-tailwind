import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <H1 />
  );
}

export default Home;

function H1() {
  return <h1 className="text-3xl font-bold underline text-center">
    Hello world!
  </h1>;
}
