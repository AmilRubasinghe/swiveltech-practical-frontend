import { useMutation } from "react-query";
import { HttpGetResponse, updateEmployee } from "./api";
import { EmployeeSchemaType } from "@/components/employee/emplyeFormSchema";

const useUpdateEmployeeMutation = () => {
  const mutation = useMutation<
    HttpGetResponse,
    unknown,
    { id: string; data: EmployeeSchemaType }
  >({
    mutationFn: updateEmployee,
  });

  return mutation;
};

export default useUpdateEmployeeMutation;
