import Footer from "../components/Footer";
import NavbarWhite from "../components/Navbars/NavbarWhite";

const NotFound = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavbarWhite />
      <main className="flex-grow flex items-center justify-center p-4">
        <h1 className="text-center text-2xl font-bold">
          <strong>You got lost!</strong>
        </h1>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
