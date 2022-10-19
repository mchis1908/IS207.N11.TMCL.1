/*
//-----------------------------------------------------Ex0.3
import * as React from 'react';

class MyButton extends React.Component{
    render() {
        return<button>{this.props.children</button>;
    }
}
export default MyButton;
//----------------------------------------------------Ex1.2


//-----------------------------------------------Ex1.3
import * as React from 'react';

const MyButton = ({ disabled, text } ) =>(
    <button disabled={disabled}>{text}</button>
);
    
MyButton.defaultProps={
    text: "My Button",
    disabled:false,
};

export default MyButton;
*/
import * as React from 'react';

class MyButton extends React.Component{
    render() {
        const { disabled, text } = this.props;
        return<button disabled={disabled}>{text}</button>;
    }
}
export default MyButton;