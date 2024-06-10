import { useCallback, useMemo } from "react";
import { useLocation, useNavigate, NavigateOptions } from "react-router-dom";

interface UseSearchParamsReturn {
  searchParams: URLSearchParams;
  setSearchParam: (key: string, value: string | null | undefined) => void;
  getSearchParam: (key: string) => string | null;
  deleteSearchParam: (key: string) => void;
}

const useSearchParams = (): UseSearchParamsReturn => {
  const navigate = useNavigate();
  const { search } = useLocation();

  const searchParams = useMemo(() => new URLSearchParams(search), [search]);

  const setSearchParam = useCallback(
    (key: string, value: string | null | undefined) => {
      const newSearchParams = new URLSearchParams(search);
      if (value === undefined || value === null) {
        newSearchParams.delete(key);
      } else {
        newSearchParams.set(key, value);
      }
      const navigateOptions: NavigateOptions = { replace: true };
      navigate(`?${newSearchParams.toString()}`, navigateOptions);
    },
    [navigate, search]
  );

  const getSearchParam = useCallback(
    (key: string) => searchParams.get(key) || null,
    [searchParams]
  );

  const deleteSearchParam = useCallback(
    (key: string) => {
      const newSearchParams = new URLSearchParams(search);
      newSearchParams.delete(key);
      const navigateOptions: NavigateOptions = { replace: true };
      navigate(`?${newSearchParams.toString()}`, navigateOptions);
    },
    [navigate, search]
  );

  return { searchParams, setSearchParam, getSearchParam, deleteSearchParam };
};

export default useSearchParams;
