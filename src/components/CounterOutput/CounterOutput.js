import React from 'react';

import './CounterOutput.css';

const counterOutput = (props) => (
	<div className="CounterOutput">Result : {props.value}</div>
);

export default counterOutput;
