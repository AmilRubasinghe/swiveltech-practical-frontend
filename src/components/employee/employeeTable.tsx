import { RiDeleteBin6Line } from "react-icons/ri";
import CustomTable from '../common/customTable/customTableBody'
import CustomButton from '../common/button/customButton'
import { useSelector } from "react-redux";
import { RootState } from "@/providers/redux/store";
import { EmployeeResponse } from "@/apis/employeeApi/api";

const tableHeaders = [
    { id: 1, title: 'Image' },
    { id: 2, title: 'First Name' },
    { id: 3, title: 'Last Name' },
    { id: 4, title: 'Email' },
    { id: 5, title: 'Phone' },
    { id: 6, title: 'Gender' },
    { id: 7, title: 'Action' }
]

interface Props {
    deleteItem: Function;
    editItem: Function;
}

const EmployeeTable = (props: Props) => {

    function phoneNumberFormat(number: string) {
        return number.charAt(0) == '0' ? number.replace(/0/, '+94') : number
    }

    const { deleteItem, editItem } = props;

    const employees = useSelector((state: RootState) => state.employee.employees);

    return (
        <div>
            <CustomTable tableHeaders={tableHeaders}>
                {employees && employees.map((item: EmployeeResponse) => (

                    <tr key={item.id} >
                        <td className="p-4 border-b border-blue-gray-50">
                            <img src={item?.photo ? item.photo : '/noavatar.png'} alt="Vercel Logo" width={50} height={12} />
                        </td>
                        <td className="p-4 border-b border-blue-gray-50">
                            <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">{item.first_name}</p>
                        </td>
                        <td className="p-4 border-b border-blue-gray-50">
                            <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">{item.last_name}</p>
                        </td>
                        <td className="p-4 border-b border-blue-gray-50">
                            <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">{item.email}</p>
                        </td>

                        <td className="p-4 border-b border-blue-gray-50">
                            <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">{phoneNumberFormat(item.number)}</p>
                        </td>
                        <td className="p-4 border-b border-blue-gray-50">
                            <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">{item.gender == 'M' ? 'Male' : item.gender == 'F' ? 'Female' : ''}</p>
                        </td>
                        <td className="p-4 mr-10 border-b border-blue-gray-50 gap-3">
                            <div className="flex gap-3 align-middle mr-4">
                                <CustomButton name='Edit' className='shadow-md text-sm px-4 py-1 bg-gray-500 text-white rounded-lg' onClick={() => editItem(item)} />
                                <CustomButton onClick={() => deleteItem(item)} >
                                    <RiDeleteBin6Line color="red" size={20} />
                                </CustomButton>

                            </div>
                        </td>
                    </tr>
                ))}
            </CustomTable>
        </div>
    )
}

export default EmployeeTable