import '../../../styles/Shared.css';
import './CustomHookExample.css';
import useLoaderStatus from '../../../hooks/UseLoaderStatus';

export const CustomHookExample = () => {
  const { status, setLoading, setNeutral, setSuccess, setError } = useLoaderStatus(1500);

  const codeWrapper = `import { useState } from 'react';

enum STATUS_ENUM {
  LOADING = "loading",
  NEUTRAL = "neutral", 
  SUCCESS = "success",
  FAIL = "fail",
}

const useLoaderStatus = () => {
  const [status, setStatus] = useState<STATUS_ENUM>(STATUS_ENUM.NEUTRAL);
  
  const setLoading = () => setStatus(STATUS_ENUM.LOADING);
  const setSuccess = () => {
    setStatus(STATUS_ENUM.SUCCESS);
    setTimeout(() => setStatus(STATUS_ENUM.NEUTRAL), 3000);
  };
  const setError = () => {
    setStatus(STATUS_ENUM.FAIL);
    setTimeout(() => setStatus(STATUS_ENUM.NEUTRAL), 3000);
  };
  
  return { status, setLoading, setSuccess, setError };
};

// Usage in component:
const { status, setLoading, setSuccess, setError } = useLoaderStatus();`;

  const renderStatusIcon = () => {
    switch (status) {
      case 'loading':
        return (
          <div className="status-loading">
            <div className="loading-spinner"></div>
            Loading...
          </div>
        );
      case 'success':
        return (
          <div className="status-success">
            <span className="status-icon">✅</span>
            Success! Operation completed successfully
          </div>
        );
      case 'fail':
        return (
          <div className="status-error">
            <span className="status-icon">❌</span>
            Error! Operation failed
          </div>
        );
      case 'neutral':
      default:
        return (
          <div className="status-neutral">
            Neutral state - Click a button to trigger a change
          </div>
        );
    }
  };

  return (
    <>
      <div className='code-block'>
        <pre>{codeWrapper}</pre>
      </div>

      <div className='code-block status-display'>
        {renderStatusIcon()}
      </div>

      <div className="button-container">
        <button
          className={`button button-loading ${status === 'loading' ? '' : ''}`}
          onClick={setLoading}
          disabled={status === 'loading'}
        >
          Start Loading
        </button>
        <button
          className='button button-success'
          onClick={setSuccess}
        >
          Trigger Success
        </button>
        <button
          className='button button-error'
          onClick={setError}
        >
          Trigger Error
        </button>
        <button
          className='button button-neutral'
          onClick={setNeutral}
        >
          Reset
        </button>
      </div>
    </>
  );
};