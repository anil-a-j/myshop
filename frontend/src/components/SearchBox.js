import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const SearchBox = ({ history }) => {
  const [keyword, setKeyword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      history.push(`/search/${keyword}`);
    } else {
      history.push("/");
    }
  };

  return (
    <Form onSubmit={submitHandler} style={{ display: "flex" }}>
      <Form.Control
        type="text"
        name=""
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="Search Products"
        className="ms-sm-2  rounded-pill border border-success"
      ></Form.Control>
      <Button type="submit" variant="success" className="mx-2 button-shadow">
        <i className="fas fa-search fs-5"></i>
      </Button>
    </Form>
  );
};

export default SearchBox;
