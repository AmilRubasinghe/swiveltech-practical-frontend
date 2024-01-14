"use client"

import CustomButton from '../common/button/customButton'
import { useRouter } from "next/navigation";
import { EMPLOYEE_LIST } from '@/constants/routes';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import employeeSchema, { EmployeeSchemaType } from './emplyeFormSchema';
import CustomInput from '../common/customInput/customInput';
import EmployeeFormInput from './employeeFormInput';
import CustomSelect from '../common/customInput/customSelect';
import useAddEmployeeMutation from '@/apis/employeeApi/useMutationAdd';
import { toast } from 'react-toastify';
import { EMPLOYEE_ADD_SUCCESS_MESSAGE, EMPLOYEE_EDIT_SUCCESS_MESSAGE } from '@/constants/message';
import useUpdateEmployeeMutation from '@/apis/employeeApi/useMutationEdit';
import { EmployeeProps, EmployeeResponse } from '@/apis/employeeApi/api';
import { useEffect } from 'react';


interface Props {
  employee?: EmployeeResponse;
}

const EmployeeForm = (props: Props) => {

  const employee = props?.employee;
  const isAddMode = !employee;
  const router = useRouter();

  const addMutate = useAddEmployeeMutation();
  const updateMutation = useUpdateEmployeeMutation();

  function createEmployee(data: EmployeeSchemaType) {

    addMutate.mutate(data, {
      onSuccess: () => {
        toast.success(EMPLOYEE_ADD_SUCCESS_MESSAGE);
        router.push(EMPLOYEE_LIST);
      }
    })
  }

  function editEmployee(id: string, data: EmployeeSchemaType) {
    console.log("🚀 ~ editEmployee ~ data:", data)

    updateMutation.mutate({ id, data }, {
      onSuccess: () => {
        toast.success(EMPLOYEE_EDIT_SUCCESS_MESSAGE);
        router.push(EMPLOYEE_LIST);
      }
    })
  }

  const onSubmit = async (data: EmployeeSchemaType) => {
    console.log("🚀 ~ onSubmit ~ isAddMode:", isAddMode, data)
    isAddMode
      ? createEmployee(data)
      : editEmployee(employee.id, data);

  }


  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<EmployeeSchemaType>({ resolver: yupResolver(employeeSchema) });


  useEffect(() => {
    if (employee) {
      const { first_name, last_name, email, number, photo, gender, } = employee
      reset({ first_name, last_name, email, number, photo, gender });
    }
  }, [employee])

  const listView = async () => {
    router.replace(EMPLOYEE_LIST);
  };

  return (
    <div className="container  mx-auto px-10 py-3 md:w-1/2 lg:w-1/2">
      <div className="flex items-center justify-end">
        <CustomButton name='LIST VIEW' className='shadow-md text-sm px-12 py-3 bg-blue-700 text-white rounded-full' onClick={listView} />
      </div>
      <div className='bg-white border mt-5 rounded-2xl p-8'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="my-8">
            <EmployeeFormInput name='First Name'>
              <CustomInput
                type="text"
                name="first_name"
                register={register}
                errors={errors}
              />
            </EmployeeFormInput>
            <EmployeeFormInput name='Last Name'>
              <CustomInput
                type="text"
                name="last_name"
                register={register}
                errors={errors}
              />
            </EmployeeFormInput>
            <EmployeeFormInput name='Email'>
              <CustomInput
                type="text"
                name="email"
                register={register}
                errors={errors}
              />
            </EmployeeFormInput>
            <EmployeeFormInput name='Phone'>
              <CustomInput
                type="text"
                name="number"
                register={register}
                errors={errors}
              />
            </EmployeeFormInput>
            <EmployeeFormInput name='Gender'>
              <CustomSelect

                name="gender"
                register={register}
                errors={errors}
                options={[{ label: 'Male', value: "M" }, { label: 'Female', value: "F" }]}
              />
            </EmployeeFormInput>
          </div>
          <div className="my-8 text-end">
            <CustomButton name={isAddMode ? 'ADD' : 'EDIT'} type='submit' className='text-base font-semibold px-12  py-3 border-2 boarder border-blue-700 text-blue-700 rounded-md' />
          </div>
        </form>


      </div>

    </div>
  )
}

export default EmployeeForm

