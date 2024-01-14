"use client"
import { useParams } from "next/navigation";
import EmployeeForm from '@/components/employee/employeeForm'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { EmployeeResponse, getEmployee } from '@/apis/employeeApi/api'



type paramsId = {
    id: string
}

const EmployeeEditPage = () => {


    const { id } = useParams();


    const [employee, setEmployee] = useState<EmployeeResponse>();

    async function fetchEmployee() {
        try {
            const response = await getEmployee(id as string);
            setEmployee(response.data);
        } catch (error: any) {
            toast.error(error);
        }
    }

    useEffect(() => {
        fetchEmployee();
    }, []);

    return (
        <div>
            {employee ? <EmployeeForm employee={employee} /> : <div className='relative flex flex-col items-center justify-center min-h-screen'>No edited users</div>}
        </div>


    )
}

export default EmployeeEditPage

