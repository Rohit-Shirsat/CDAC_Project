import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Vendor() {
  const [data, setData] = useState([
    { id: 1, name: "Saurabh", age: 23, address: "Kopargaon" },
    { id: 2, name: "Rahul", age: 25, address: "Pune" },
    { id: 3, name: "Priya", age: 22, address: "Nashik" },
  ]);

  const handleRemove = (id) => {
    const updatedData = data.filter((item) => item.id !== id);
    setData(updatedData);
  };

  const handleUpdate = (id) => {
    alert(`Update action for ID: ${id}`); // Fixed template literal
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Vendor Table</h2>
      <table className="table table-bordered table-hover">
        <thead className="thead-dark">
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Age</th>
            <th>Address</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>{item.address}</td>
              <td>
                <button
                  className="btn btn-danger btn-sm me-2"
                  onClick={() => handleRemove(item.id)}
                >
                  Remove
                </button>
                <button
                  className="btn btn-primary btn-sm"
                  onClick={() => handleUpdate(item.id)}
                >
                  Update
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Vendor;
