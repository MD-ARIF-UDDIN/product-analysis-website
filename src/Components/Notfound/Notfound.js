import React from "react";

const Notfound = () => {
  return (
    <div className="d-flex justify-content-center align-items-center m-5 p-3">
      <div>
        <img
          src="https://th.bing.com/th/id/OIP.Vw8vDi4Dtw4P-r75Xy4mawHaHa?pid=ImgDet&rs=1"
          alt=""
        />
      </div>
      <div>
        <h1>Oops!</h1>
        <h3>Something went wrong</h3>
        <h3>Not Found</h3>
      </div>
    </div>
  );
};

export default Notfound;
