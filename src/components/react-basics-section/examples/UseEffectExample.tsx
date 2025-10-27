import { useEffect, useState } from "react";

export const UseEffectExample = () => {
  const fetchUrl = "https://json-placeholder.mock.beeceptor.com/todos/1";
  const [shouldFetch, setShouldFetch] = useState(false);
  const [fetchedTodo, setFetchedTodo] = useState<any>(null);

  const codeWrapper = `import React, { useState, useEffect } from 'react';

function TodoFetcher() {
  const [shouldFetch, setShouldFetch] = useState(false);
  const [todo, setTodo] = useState(null);
  
  useEffect(() => {
    async function fetchTodo() {
      const response = await fetch(\`/api/todos/\${todoId}\`);
      const todoData = await response.json();
      setTodo(todoData);
      }
    fetchUser();
  }, [shouldFetch]); // Re-run when shouldFetch changes
}`

  useEffect(() => {
    const fetchTodos = async () => {
      const response = await fetch(fetchUrl);
      const data = await response.json();
      setFetchedTodo(data);
    }
    if (shouldFetch) {
      fetchTodos();
    }
  }, [shouldFetch]);

  return (
    <>
      <div className='code-block'>
        <pre>{codeWrapper}</pre>
      </div>
      {fetchedTodo && (
        <div className='code-block'>
          <pre>{JSON.stringify(fetchedTodo, null, 2)}</pre>
        </div>
      )}
      <button className='button align-right' onClick={() => setShouldFetch(true)}>
        Fetch Todo
      </button>
    </>
  );
};
