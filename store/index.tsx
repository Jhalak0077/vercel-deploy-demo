import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { JSX } from 'react';
import { IChildren } from '@/@types';

type TProviderList = Array<({ children }: IChildren) => JSX.Element>;

const queryClient = new QueryClient();

/**
 * Application Providers list handler
 * Note: The order of provider will affect the injection
 */
const ProvidersList: TProviderList = [];

/**
 * A global provider's wrapper to accumulate providers and dynamically inject on app
 */
const ProviderWrapper = ({ children }: IChildren) =>
  ProvidersList.reduce(
    (acc, Provider) => <Provider>{acc} </Provider>,
    children,
  );

/**
 * Global Application context provider
 */
const ApplicationProviders = ({ children }: IChildren) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ProviderWrapper>{children}</ProviderWrapper>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default ApplicationProviders;
