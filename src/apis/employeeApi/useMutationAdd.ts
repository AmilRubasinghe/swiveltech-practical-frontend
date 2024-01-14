import { useMutation } from "react-query";
import { addEmployee } from "./api";

const useAddEmployeeMutation = () => {
  const mutation = useMutation({
    mutationFn: addEmployee,
  });

  return mutation;
};

export default useAddEmployeeMutation;
