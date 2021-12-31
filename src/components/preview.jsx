import React from 'react'

export default function preview(props) {
    // console.log('ParsedMarkdown: ', props.parsedMarkdown)

    return (
        <div>
            <div id="preview">
                {props.parsedMarkdown}
                asdfasfdasdf
            </div>
        </div>
    )
}
