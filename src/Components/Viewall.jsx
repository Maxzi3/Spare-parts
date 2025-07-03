import { Link } from "react-router-dom";


const ViewAll = () => {
  return (
    <div>
      <Link
        to="/Product"
        className="block w-32 py-3 pl-5 m-auto text-white bg-orange-600 rounded-full hover:text-secondary hover:bg-orange-800"
      >
        Load more
      </Link>
    </div>
  );
};

export default ViewAll;
