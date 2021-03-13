/* eslint-disable  @typescript-eslint/no-explicit-any */

import { Method } from 'axios';
import { ConfigInterface } from 'swr';
import { fetcherFn } from 'swr/dist/types';

export interface RequestParams<D, T, E> {
  endpoint: string;
  method: Method;
  data?: T;
  headers?: any;
  lazy?: boolean;
  onSuccess?(dataResponse?: D): void;
  onError?(error?: E): void;
}

export interface RequestFetchParams<P, D, E> {
  endpoint: string;
  lazy?: boolean;
  params?: P;
  onSuccess?(
    data: D,
    key: string,
    config: ConfigInterface<D, E, fetcherFn<D>>,
  ): void;
  onError?(
    error: E,
    key: string,
    config: ConfigInterface<D, E, fetcherFn<D>>,
  ): void;
}