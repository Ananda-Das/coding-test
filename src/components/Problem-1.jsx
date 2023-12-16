import React, { useState } from "react";

const Problem1 = () => {
  const [show, setShow] = useState("all");

  const handleClick = (val) => {
    setShow(val);
  };

  const [data, setData] = useState([]);
  const [displayStatus, setDisplayStatus] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);

    const name = form.get("name");
    const status = form.get("status");

    // Add the submitted data to the array
    setData([...data, { name, status }]);
  };

  // Filter data based on the selected status
  const filteredData = data.filter(item => show === 'all' || item.status === show);


  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <h4 className="text-center text-uppercase mb-5">Problem-1</h4>
        <div className="col-6 ">
          <form onSubmit={handleSubmit} className="row gy-2 gx-3 align-items-center mb-4">
            <div className="col-auto">
              <input type="text" name="name" className="form-control" placeholder="Name" />
            </div>
            <div className="col-auto">
              <input type="text" name="status" className="form-control" placeholder="Status" />
            </div>
            <div className="col-auto">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="col-8">
          <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li className="nav-item">
              <button className={`nav-link ${show === "all" && "active"}`} type="button" onClick={() => handleClick("all")}>
                All
              </button>
            </li>
            <li className="nav-item">
              <button className={`nav-link ${show === "active" && "active"}`} type="button" onClick={() => handleClick("active")}>
                Active
              </button>
            </li>
            <li className="nav-item">
              <button className={`nav-link ${show === "completed" && "active"}`} type="button" onClick={() => handleClick("completed")}>
                Completed
              </button>
            </li>
          </ul>
          <div className="tab-content"></div>
          <table className="table table-striped ">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Problem1;
