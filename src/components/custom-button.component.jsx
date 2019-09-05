import React from 'react';
import './custom-button.styles.scss';
const CustomButton = (props) => <button onClick={props.handleButton}>{props.content}</button>;

export default CustomButton;
