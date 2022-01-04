import React from 'react'

export default function preview(props) {

    return (
            <div className="preview" dangerouslySetInnerHTML={{__html: props.parsedMarkdown}}/>
    )
}
