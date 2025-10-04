/**
 * Hook to access centralized descriptions/content
 */
import descriptions from '@/descriptions.json';

export const useDescriptions = () => {
  return descriptions;
};

export default useDescriptions;