/* eslint-disable  @typescript-eslint/no-explicit-any */

import { useState, useEffect, useCallback } from 'react';

import { RequestParams } from 'core/interfaces/RequestParams';
import api from 'core/services/api';

export const useRequest = <Data = any, Error = any, DataRequest = any>({
  endpoint,
  method,
  data,
  headers,
  lazy,
  onSuccess,
  onError,
}: RequestParams<Data, DataRequest, Error>) => {
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState<Data | null>(null);
  const [error, setError] = useState<Error | null>(null);

  const handleRequest = useCallback(async () => {
    try {
      setIsLoading(true);

      const { data: responseData } = await api.request({
        url: endpoint,
        method,
        data,
        headers: { ...headers },
      });

      setResponse(responseData);
      onSuccess && onSuccess(responseData);

      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      setError(err);
      onError && onError(err);
    }
  }, [setError, data, endpoint, method, headers, service, onSuccess, onError]);

  useEffect(() => {
    if (!lazy) {
      handleRequest();
    }
  }, [lazy, handleRequest]);

  return { isLoading, response, error };
};