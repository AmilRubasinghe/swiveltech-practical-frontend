import { EmployeeSchemaType } from "@/components/employee/emplyeFormSchema";
import axiosAuth from "@/lib/axios";

interface HttpResponse<T> {
  data: T;
  success: boolean;
}

export type UpdateEmployeeRequest = {
  id: string;
  data: EmployeeSchemaType;
};
export interface HttpGetResponse {
  data: EmployeeResponse[];
  success: boolean;
}

export type SearchParams = {
  id?: string;
  first_name?: string;
  last_name?: string;
  email?: string;
  gender?: string;
};

export type EmployeeResponse = {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  number: string;
  photo: string;
  gender: string;
};

export interface EmployeeProps {
  id: string;
  first_name?: string;
  last_name?: string;
  email?: string;
  number?: string;
  photo?: string;
  gender?: string;
}

const EmployeeUrl = "employee";

export async function addEmployee(data?: EmployeeSchemaType) {
  const res = await axiosAuth.post<HttpResponse<EmployeeResponse>>(
    EmployeeUrl,
    data
  );
  return res.data;
}

export async function getEmployees(data: SearchParams) {
  const res = await axiosAuth.get<HttpResponse<EmployeeResponse>>(EmployeeUrl, {
    params: data,
  });
  return res.data;
}
export async function getEmployee(id: string) {
  const res = await axiosAuth.get<HttpResponse<EmployeeResponse>>(
    `${EmployeeUrl}/${id}`
  );

  return res.data;
}

export async function updateEmployee({ id, data }: UpdateEmployeeRequest) {
  const res = await axiosAuth.put<HttpGetResponse>(
    `${EmployeeUrl}/${id}`,
    data
  );
  return res.data;
}

export async function deleteEmployee(data: EmployeeProps) {
  const res = await axiosAuth.delete(`${EmployeeUrl}/${data.id}`);
  return res.data;
}
