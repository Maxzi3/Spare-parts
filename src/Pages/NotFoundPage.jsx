import { FaFaceFrown } from "react-icons/fa6";

const NotFoundPage = () => {
  return (

      <div>
        <FaFaceFrown className="mx-auto my-24 text-center text-red-600  text-8xl animate-pulse" />
        <h1 className="text-5xl font-bold text-center text-orange-600 animate-bounce">404</h1>
        <p className="mb-12 text-xl text-center text-orange-600">
          Page not found
        </p>
      </div>
    
  );
}

export default NotFoundPage
