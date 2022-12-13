import React from 'react';
interface IString {
    text: string,
    text2:string
}
function TestComponent({text}:IString, {text2}:IString) {
    return (
        <div>
            <p>it works the test component</p>
            <p>{text}</p>
            <p>{text2}</p>

        </div>
    );
}

export default TestComponent;