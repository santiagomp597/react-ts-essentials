import { useEffect, useState } from "react";

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

function validateTodoResponse<T>(data: T): T {
  // Basic validation to check if data has expected properties
  if (
    typeof data === 'object' &&
    data !== null &&
    'userId' in data &&
    'id' in data &&
    'title' in data &&
    'completed' in data
  ) {
    return data;
  }
  throw new Error('Invalid todo response');
}


interface FetchState {
  data: object | null;
  loading: boolean;
  error: string | null;
}

export const UseEffectExample = () => {
  const fetchUrl = "https://json-placeholder.mock.beeceptor.com/todos/1";
  const [shouldFetch, setShouldFetch] = useState(false);
  const [fetchState, setFetchState] = useState<FetchState>({
    data: null,
    loading: false,
    error: null
  });

  const codeWrapper = `import React, { useState, useEffect } from 'react';

function TodoFetcher() {
  const [shouldFetch, setShouldFetch] = useState(false);
  const [todo, setTodo] = useState(null);
  
  useEffect(() => {
    async function fetchTodo() {
      try {
        const response = await fetch(\`/api/todos/\${todoId}\`);
        if (!response.ok) {
          throw new Error(\`HTTP \${response.status}: \${response.statusText}\`);
        }
        const todoData = await response.json();
        setTodo(todoData);
      } catch (error) {
        console.error('Failed to fetch todo:', error);
        setError(error.message);
      }
    }
    if (shouldFetch) {
      fetchTodo();
    }
  }, [shouldFetch]);
}`;

  useEffect(() => {
    if (!shouldFetch) return;

    const fetchTodos = async () => {
      try {
        setFetchState(prev => ({ ...prev, loading: true, error: null }));

        const response = await fetch(fetchUrl, {
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }

        const data = await response.json();
        validateTodoResponse<Todo>(data);
        setFetchState(prev => ({ ...prev, data, loading: false }));

      } catch (error: unknown) {
        const errorMessage = error instanceof Error
          ? error.message
          : 'An unexpected error occurred';

        console.error('Failed to fetch todo:', error);
        setFetchState(prev => ({
          ...prev,
          error: errorMessage,
          loading: false
        }));
      }
    };

    fetchTodos();
  }, [shouldFetch, fetchUrl]);

  return (
    <>
      <div className='code-block'>
        <pre>{codeWrapper}</pre>
      </div>

      {fetchState.loading && (
        <div className='code-block'>
          <pre>Loading...</pre>
        </div>
      )}

      {fetchState.error && (
        <div className='code-block error'>
          <pre>Error: {fetchState.error}</pre>
        </div>
      )}

      {fetchState.data && !fetchState.loading && !fetchState.error && (
        <div className='code-block'>
          <pre>{JSON.stringify(fetchState.data, null, 2)}</pre>
        </div>
      )}

      <button
        className='button align-right'
        onClick={() => setShouldFetch(true)}
        disabled={fetchState.loading}
      >
        {fetchState.loading ? 'Fetching...' : 'Fetch Todo'}
      </button>
    </>
  );
};