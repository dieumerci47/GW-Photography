import { Button } from "@/components/ui/button";
const Home = () => {
  return (
    <>
      <section className="w-full h-screen  bg-amber-300 pt-20">
        <div className="h-full w-96 flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-gray-800">
            Capturez des moments inoubliables avec nous
          </h1>
          <p className="text-lg max-w-2xl mb-8 text-gray-700 ">
            Découvrez l'art de la photographie à travers notre portfolio. Chaque
            image raconte une histoire unique, prête à immortaliser vos précieux
            souvenirs.
          </p>
          <div className="flex gap-x-4">
            <Button>1</Button>
            <Button>2</Button>
          </div>
          {/* <h1 className="bg-amber-600 p-2 ">Home</h1> */}
        </div>
      </section>
    </>
  );
};

export default Home;
