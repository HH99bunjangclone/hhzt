import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import GlobalStyle from './GlobalStyle';
import Router from './shared/Router';

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <Router />
    </QueryClientProvider>
  );
}
export default App;
