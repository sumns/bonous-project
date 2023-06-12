import "./App.css";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function App() {
  return (
    <div className="App">
      <h1>Post Crud operation</h1>
      <Input />
      <Print />
    </div>
  );
}

const Input = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState({
    product: "",
    rating: "",
    price: ""
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  // console.log(details)

  const handleClick = () => {
    dispatch({ type: "add", data });
    setData({
      product: "",
      rating: "",
      price: ""
    });
  };

  // console.log(details);
  return (
    <div className="input_container">
      <input
        onChange={handleChange}
        placeholder="Enter Product Name"
        value={data?.product}
        name="product"
      />
      <input
        onChange={handleChange}
        value={data?.price}
        name="price"
        placeholder="Enter Price"
      />
      <input
        onChange={handleChange}
        value={data?.rating}
        name="rating"
        placeholder="Enter rating"
      />

      <button onClick={handleClick}>Submit</button>
    </div>
  );
};

const Print = () => {
  const state = useSelector((store) => store);
  const dispatch = useDispatch();
  const [isUpdate, setIsupdate] = useState(false);
  const [data, setData] = useState({
    product: "",
    rating: "",
    price: ""
  });
  // console.log(data)

  const handleUpdate = (ele) => {
    setIsupdate(true);
    setData(ele);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleClick = () => {
    dispatch({ type: "update", data });
    setData({
      product: "",
      rating: "",
      price: ""
    });
    setIsupdate(false);
  };
  // console.log(state)

  return (
    <div>
      {isUpdate && (
        <div className="active">
          <input
            onChange={handleChange}
            placeholder="Enter Product Name"
            value={data?.product}
            name="product"
          />
          <input
            onChange={handleChange}
            value={data?.price}
            name="price"
            placeholder="Enter Price"
          />
          <input
            onChange={handleChange}
            value={data?.rating}
            name="rating"
            placeholder="Enter rating"
          />

          <button onClick={handleClick}>Update</button>
        </div>
      )}

      <table>
        <thead>
          <tr>
            <th>Prduct</th>
            <th>Price</th>
            <th>Rating</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {state.map((ele) => {
            return (
              <tr key={ele.id}>
                <td>{ele.product}</td>
                <td>{ele.price}</td>
                <td>{ele.rating}</td>
                <td onClick={() => handleUpdate(ele)}>Update</td>
                <td onClick={() => dispatch({ type: "delete", payload: ele })}>
                  Delete
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
