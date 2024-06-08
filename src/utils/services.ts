import axios from 'axios';
import { APIURL } from '../constants';
import { DocumentData } from '../interfaces';

export const refreshAccessToken = async (accessToken: string) => {
  try {
    const refreshTokenResponse = await axios.post(
      `${APIURL}/auth/refresh`,
      {},
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    return refreshTokenResponse.data.accessToken;
  } catch (error) {
    console.error('Error refreshing access token:', error);
    throw error;
  }
};

export const getVisitorCount = async (
  setVisitorCount: (visitorCount: number) => void
) => {
  try {
    const { data } = await axios.post(
      `${APIURL}/api/visitedcount/incrementcount`
    );
    setVisitorCount(data.count);
  } catch (error) {
    console.log(error);
  }
};

export const getAllDocumentsV2 = async (
  setErizeler: (erizeler: DocumentData[]) => void,
  setTotalDownloadCount: (total: number) => void
) => {
  try {
    const { data } = await axios.get(`${APIURL}/api/application/findAll`);
    if (data?.success) {
      setErizeler(data?.documents);
      const total = sumDownloadCounts(data?.documents);
      setTotalDownloadCount(total);
    }
  } catch (error) {
    console.log(error);
  }
};

export const sumDownloadCounts = (documents: DocumentData[]): number => {
  let totalDownloadCount: number = 0;

  documents.forEach((document: DocumentData) => {
    totalDownloadCount += document.downloadCount ?? 0;
  });

  return totalDownloadCount;
};
