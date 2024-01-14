import { useQuery } from "react-query";
import { getEmployees } from "./api";

const useGetEmployee = () => {
  const query = useQuery({
    queryKey: ["employees"],
    queryFn: () => getEmployees,
  });
  return query;
};

export default useGetEmployee;
