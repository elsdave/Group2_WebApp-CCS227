import Navbar from "../components/navbar";
import Footer from "../components/Footer";

const AboutUs = () => {
  return (
    // TODO: please remove debugging colors.
    <div className="flex flex-col min-h-screen bg-violet-400">
      <Navbar />
      <main className="flex-grow flex items-center justify-center p-4">
        <h1 className="text-center text-2xl font-bold">
          <strong>About Page</strong>
        </h1>
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;