import { useMutation } from "react-query";
import { deleteEmployee } from "./api";

const useDeleteEmployeeMutation = () => {
  const mutation = useMutation({
    mutationFn: deleteEmployee,
  });

  return mutation;
};

export default useDeleteEmployeeMutation;
