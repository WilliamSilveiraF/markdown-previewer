import React, { useState } from "react";
import { marked } from "marked";
import { info } from './info'

function App() {
  const [text, setText] = useState(info)
  
  const getMarkdown = () => {
    const markdown = marked(text, { breaks: true })
    return { __html: markdown }
  }

  return (
    <main>
      <section id='compiler' className="column mt-4">
        
        <div class="control form-group shadow-textarea col-10 m-auto">
          <h1 className="mb-4 text-center">Converta seu Markdown:</h1>
          <textarea 
            class="form-control z-depth-1"
            placeholder="Converta seu markdown:"
            id="editor"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <article id='preview' className="control col-10 m-auto mt-4">
          <div dangerouslySetInnerHTML={ getMarkdown() }></div>
        </article>
      </section>
    </main>
  );
}

export default App;
