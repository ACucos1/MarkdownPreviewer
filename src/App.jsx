import './App.css';
import Preview from './components/preview'
import TextArea from './components/textArea'
import React, { useState } from 'react'
import { marked } from 'marked'

function App() {


  const [markdownText, setMarkdownText] = useState('')
  const [parsedMarkdown, setParsedMarkDown] = useState('')


  const handleSubmit = (e) => {
    // console.log(markdownText)
    setParsedMarkDown(marked.parse(markdownText))
    // console.log(parsedMarkdown)
    setMarkdownText('')
  }

  const handleChange = (e) => {
    // console.log(e.target.value)
    setMarkdownText(e.target.value)
  }
  
  


  return (
    <div className="App">
      Hello World
      <TextArea markdownText={markdownText} handleSubmit={handleSubmit} handleChange={handleChange} />
      <Preview parsedMarkdown={parsedMarkdown} />
    </div>
  );
}

export default App;
