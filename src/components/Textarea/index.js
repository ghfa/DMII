import React from 'react';

export default function Textarea(props) {
    return (
        <textarea 
            onChange={props.onChange}
            placeholder={props.placeholder}>
        </textarea>
    );
}