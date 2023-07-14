import { DataProvider } from "../context/data/useData";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <DataProvider>{children}</DataProvider>
    </>
  );
};
