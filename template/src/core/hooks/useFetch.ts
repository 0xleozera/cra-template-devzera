/* eslint-disable  @typescript-eslint/no-explicit-any */

import { useCallback, useMemo } from 'react';

import useSWR, { ConfigInterface } from 'swr';
import { fetcherFn } from 'swr/dist/types';

import api from 'core/services/api';

import { RequestFetchParams } from 'core/interfaces/RequestParams';

export const useFetch = <Data = any, Error = any, Params = any>({
  endpoint,
  params,
  lazy,
  onSuccess,
  onError,
}: RequestFetchParams<Params, Data, Error>) => {
  const handleSuccess = useCallback(
    (
      data: Data,
      key: string,
      config: ConfigInterface<Data, Error, fetcherFn<Data>>,
    ) => {
      if (!onSuccess) {
        return null;
      }

      return onSuccess(data, key, config);
    },
    [onSuccess],
  );

  const handleError = useCallback(
    (
      err: Error,
      key: string,
      config: ConfigInterface<Data, Error, fetcherFn<Data>>,
    ) => {
      if (!onError) {
        return null;
      }

      return onError(err, key, config);
    },
    [onError],
  );

  const { data, error, mutate } = useSWR<Data, Error>(
    !lazy ? endpoint : null,
    async (currentUrl) => {
      const response = await api.get(currentUrl, { params });

      return response.data;
    },
    { onSuccess: handleSuccess, onError: handleError },
  );

  const isLoading = useMemo(() => !lazy && !(data || error), [
    data,
    error,
    lazy,
  ]);

  return { data, error, mutate, isLoading };
};
