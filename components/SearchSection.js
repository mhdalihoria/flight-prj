import React, { useState, useContext } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ContextObj } from "@/Context";

export default function SearchSection() {
  const [query, setQuery] = useState({
    from: "",
    to: "",
    departDate: new Date(),
    returnDate: new Date(),
  });

  const { setSearch } = useContext(ContextObj);

  const changeHandler = (e) => {
    const { value, id } = e.target;
    setQuery((prevQuery) => {
      return {
        ...prevQuery,
        [id]: value,
      };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setSearch(query);
  };

  return (
    <div className="form-container">
      <form onSubmit={submitHandler}>
        <div className="form-item">
          <label htmlFor="from">From</label>
          <input
            id="from"
            type="text"
            placeholder="From"
            value={query.from}
            onChange={changeHandler}
            required
          ></input>
        </div>
        <div className="form-item">
          <label htmlFor="to">To</label>
          <input
            id="to"
            type="text"
            placeholder="Destination"
            value={query.to}
            onChange={changeHandler}
            required
          ></input>
        </div>
        <div className="form-item">
          <label htmlFor="departDate">Depart</label>
          <ReactDatePicker
            selected={query.departDate}
            onChange={(date) =>
              setQuery((prevQuery) => ({ ...prevQuery, departDate: date }))
            }
          />
        </div>
        <div className="form-item">
          <label htmlFor="returnDate">Return</label>
          <ReactDatePicker
            selected={query.returnDate}
            onChange={(date) =>
              setQuery((prevQuery) => ({ ...prevQuery, returnDate: date }))
            }
          />
        </div>
        <button className="form-button">Search</button>
      </form>
    </div>
  );
}
