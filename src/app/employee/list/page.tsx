"use client"

import CustomButton from '@/components/common/button/customButton'
import { toast } from "react-toastify";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { useState, useEffect } from 'react';
import EmployeeTable from '@/components/employee/employeeTable';
import { AddEmployee, } from '@/providers/redux/features/employes';
import { EmployeeProps, getEmployees } from '@/apis/employeeApi/api';
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from "next/navigation";
import { RootState } from "@/providers/redux/store";
import { EMPLOYEE_ADD, EMPLOYEE_EDIT } from "@/constants/routes";
import { FaListUl } from "react-icons/fa";
import ConfirmDialog from '@/components/common/customDialog/deleteConformDialog';
import EmployeeCardItem from '@/components/employee/employeeCardItem';
import useDeleteEmployeeMutation from '@/apis/employeeApi/useMutationDelete';
import { EMPLOYEE_DELETE_SUCCESS_MESSAGE } from '@/constants/message';


const EmployeeList = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    const [isGrid, setIsGrid] = useState(false);
    const [confirmOpen, setConfirmOpen] = useState(false);
    const [editItem, setEditItem] = useState<EmployeeProps>();

    const { mutate, isSuccess } = useDeleteEmployeeMutation()

    const employees = useSelector((state: RootState) => state.employee.employees);

    const editEmployee = async (item: EmployeeProps) => {
        router.replace(`${EMPLOYEE_EDIT}/${item.id}`);
    };

    const deleteEmployee = async (item: EmployeeProps) => {
        setConfirmOpen(true)
        setEditItem(item)
    };


    const addEmployee = async () => {
        router.replace(`${EMPLOYEE_ADD}`);
    };

    const deleteEmployeeItem = async () => {
        if (editItem) {
            mutate(editItem, {
                onSuccess: () => {
                    toast.success(EMPLOYEE_DELETE_SUCCESS_MESSAGE);
                    fetchEmployeeData();
                    setConfirmOpen(false);
                }
            })
        } else {
            toast.warning('Not defined employee');
        }


    };

    async function fetchEmployeeData() {
        try {
            const response = await getEmployees({});
            dispatch(AddEmployee(response.data));
        } catch (error: any) {
            toast.error(error);
        }
    }

    useEffect(() => {
        fetchEmployeeData();
    }, [dispatch]);




    return (
        <div>
            <div>
                <ConfirmDialog
                    title="Delete Employee?"
                    open={confirmOpen}
                    onClose={() => setConfirmOpen(false)}
                    onConfirm={() => deleteEmployeeItem()}
                >
                    Are you sure you want to delete this employee?
                </ConfirmDialog>
            </div>


            <div className="flex items-center justify-end gap-3">

                <CustomButton name='ADD EMPLOYEE' className='shadow-md text-sm px-6 py-3 bg-blue-700 text-white rounded-full' onClick={addEmployee} />
                <CustomButton className='shadow-md text-sm p-3 bg-blue-700 text-white rounded-full' onClick={() => setIsGrid(current => !current)} >
                    {isGrid ? <FaListUl /> : <BsFillGrid3X3GapFill />}

                </CustomButton>
            </div>

            {isGrid && <div className='flex flex-wrap p-10 overflow-x-hidden'>

                {employees && employees.map((item: EmployeeProps) => (<div key={item.id} className='my-3 px-2 w-full md:w-1/2 lg:w-1/5'>
                    <EmployeeCardItem item={item} deleteItem={() => deleteEmployee(item)} editItem={editEmployee} />
                </div>))}

            </div>}

            {!isGrid && <div className='px-5 py-7'>

                <EmployeeTable deleteItem={deleteEmployee} editItem={editEmployee} />
            </div>}
        </div>
    )
}

export default EmployeeList


