// app/problem/[id]/page.jsx
"use client";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'

import { usePathname, useSearchParams } from 'next/navigation';
import { Sandpack, SandpackProvider, SandpackCodeEditor, SandpackThemeProvider } from "@codesandbox/sandpack-react";
import Editor from "@/components/NewCodeEditor";


const ProblemDetail = () => {
  // const router = useRouter()
  // const { id } = router.query.id
  const pathname = usePathname();
  const id = pathname.split('/').pop();
  const [searchParams] = useSearchParams();
  console.log(searchParams)
  const [problem, setProblem] = useState(null);
  const [showHints, setShowHints] = useState(false);
  const [debugInfo, setDebugInfo] = useState({});

  useEffect(() => {
    if (id) {
      setDebugInfo(prev => ({ ...prev, id }));
      setDebugInfo(prev => ({ ...prev, fetchStatus: 'Fetching problem details...' }));
      
      fetch(`https://x8ki-letl-twmt.n7.xano.io/api:m3qoN9RM/lcdb/${id}`)
        .then(response => response.json())
        .then(data => {
          setProblem(data);
          setDebugInfo(prev => ({ ...prev, fetchedData: data }));
        })
        .catch(error => {
          console.error("Failed to fetch problem:", error);
          setDebugInfo(prev => ({ ...prev, fetchError: error.message }));
        });
    }
  }, [id]);

  if (!problem) {
    return (
      <div>
        <p>Loading...</p>
        <pre>{JSON.stringify(debugInfo, null, 2)}</pre>
      </div>
    );
  }

  const initialCode = {
    "/index.js": `// Try solving the problem: ${problem ? problem.Title : ''}
      
function solve() {
  // Your code here
}`
  };

  return (
    <div className="problem-container">
      <h1 className="problem-title">{problem.Title}</h1>
      <p className="problem-description">{problem.Problem_Description}</p>
      <p className="test-cases">{problem.Test_Cases}</p>
      <button className="hint-toggle-btn" onClick={() => setShowHints(!showHints)}>Show Hints</button>
      {showHints && (
          <div className="hints">
              <div className="hint">{problem.Hints_1}</div>
              <div className="hint">{problem.Hint_2}</div>
              <div className="hint">{problem.Hint_3}</div>
          </div>
      )}
       {/* <div className="editor-section">
        <SandpackProvider template="nextjs" customSetup={{ files: initialCode }}>
            <SandpackThemeProvider>
                <SandpackCodeEditor showLineNumbers />
            </SandpackThemeProvider>
        </SandpackProvider>
    </div> */}
      <div className="editor-section">
          <Editor />
      </div>

      <button className="submit-btn">Submit</button>
    </div>
  );
};

export default ProblemDetail;

