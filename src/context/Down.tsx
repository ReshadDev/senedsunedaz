import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';

type DownloadCountContextType = {
  downloadCount: number;
  incrementDownloadCount: () => void;
};

const DownloadCountContext = createContext<
  DownloadCountContextType | undefined
>(undefined);

export const DownloadCountProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [downloadCount, setDownloadCount] = useState(0);

  useEffect(() => {
    // Retrieve download count from localStorage on component mount
    const storedCount = localStorage.getItem('downloadCount');
    if (storedCount) {
      setDownloadCount(parseInt(storedCount, 10));
    }
  }, []);

  const incrementDownloadCount = () => {
    const newCount = downloadCount + 1;
    setDownloadCount(newCount);
    // Update localStorage with the new count
    localStorage.setItem('downloadCount', newCount.toString());
  };

  const contextValue: DownloadCountContextType = {
    downloadCount,
    incrementDownloadCount,
  };

  return (
    <DownloadCountContext.Provider value={contextValue}>
      {children}
    </DownloadCountContext.Provider>
  );
};

export const useDownloadCount = (): DownloadCountContextType => {
  const context = useContext(DownloadCountContext);
  if (!context) {
    throw new Error(
      'useDownloadCount must be used within a DownloadCountProvider'
    );
  }
  return context;
};
