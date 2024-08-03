import React from "react";
import { Link } from "react-router-dom";


const ViewAll = () => {
  return (
    <div>
      <Link
        to="/Product"
        className="text-white hover:text-secondary bg-orange-600 hover:bg-orange-800  block m-auto w-32 pl-5 py-3 rounded-full"
      >
        Load more
      </Link>
    </div>
  );
};

export default ViewAll;
