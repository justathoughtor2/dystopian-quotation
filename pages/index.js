import Image from 'next/image'

const Home = ({ quote }) => {
  return (
    <img id="quote"
      src={quote.quotation}
    />
  );
};

export async function getServerSideProps() {
  const res = await fetch('https://dystopian-quotation.vercel.app/api/img');
  const quote = await res.json();

  return {
    props: {
      quote
    }
  };
}

export default Home;