import './App.css';
import Preview from './components/preview'
import TextArea from './components/textArea'
import React, { useState } from 'react'
import { marked } from 'marked'

function App() {

  marked.setOptions({
    gfm: true,
    breaks: true
  })

  const [markdownText, setMarkdownText] = useState('')
  const [parsedMarkdown, setParsedMarkDown] = useState('')


  const handleSubmit = (e) => {
    // console.log(markdownText)
    setParsedMarkDown(marked.parse(markdownText))
    // console.log(parsedMarkdown)

    // setMarkdownText('')
  }

  const handleChange = (e) => {
    // console.log(e.target.value)
    setMarkdownText(e.target.value)
  }

  


  return (
    <div className="App">
      <h1 id="title">Markdown Previewer</h1>
      <TextArea markdownText={markdownText} handleSubmit={handleSubmit} handleChange={handleChange} />
      <div className="previewContainer">
        <Preview parsedMarkdown={parsedMarkdown}/>
      </div>
    </div>
  );
}

export default App;
