import React from "react";

const Winner = ({ winner }) => winner !== "" ? (<h2 className="alert alert-success">{winner} wins!</h2>) : null;

export default Winner;