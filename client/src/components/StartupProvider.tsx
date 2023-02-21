import { ThemeProvider } from "@emotion/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { theme } from "../global/theme";

interface StartupProviderProps {
  children: React.ReactNode;
}

export const reactQueryClient = new QueryClient({
  defaultOptions: { queries: { staleTime: 1000 * 60 } },
});

export const StartupProvider = ({ children }: StartupProviderProps) => {
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={reactQueryClient}>
        {children}
      </QueryClientProvider>
    </ThemeProvider>
  );
};
