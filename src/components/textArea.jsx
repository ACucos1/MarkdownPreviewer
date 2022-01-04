import React from 'react'

export default function textArea(props) {
    return (
        <div className="input">
            <textarea value={props.markdownText} name="editor" id="editor" cols="30" rows="10" onChange={props.handleChange} />
            <button onClick={props.handleSubmit}>Preview</button>
        </div>
    )
}
