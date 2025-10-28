import { useState } from 'react';
enum STATUS_ENUM {
  LOADING = "loading",
  NEUTRAL = "neutral",
  SUCCESS = "success",
  FAIL = "fail",
}

const useLoaderStatus = (timeout: number = 2000) => {
  const [status, setStatus] = useState<STATUS_ENUM>(STATUS_ENUM.NEUTRAL);

  const setLoading = () => setStatus(STATUS_ENUM.LOADING);
  const setNeutral = () => setStatus(STATUS_ENUM.NEUTRAL);
  const setSuccess = () => {
    setStatus(STATUS_ENUM.SUCCESS);
    setTimeout(
      () => {
        setStatus(STATUS_ENUM.NEUTRAL);
      },
      timeout);
  };
  const setError = () => {
    setStatus(STATUS_ENUM.FAIL);
    setTimeout(
      () => {
        setStatus(STATUS_ENUM.NEUTRAL);
      },
      timeout);
  };

  return {
    status,
    setLoading,
    setNeutral,
    setSuccess,
    setError,
  };
};

export default useLoaderStatus;