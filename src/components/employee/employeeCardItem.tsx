import React from 'react'
import CustomButton from '../common/button/customButton'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { FaUserEdit } from 'react-icons/fa'
import { EmployeeProps } from '@/apis/employeeApi/api';

interface Props {
    item: EmployeeProps;
    deleteItem: Function;
    editItem: Function;
}

const EmployeeCardItem = (props: Props) => {
    const { item, deleteItem, editItem } = props;
    return (
        <div>
            <div className="overflow-hidden flex flex-col bg-white gap-2 rounded-lg shadow dark:border-gray-700">
                <div >
                    <img className="rounded-t-lg block h-auto w-full " src={item?.photo ? item.photo : '/noavatar.png'} alt="" />
                </div>
                <div className="flex flex-col p-4 text-sm font-semibold text-black">

                    <p className="mb-1">{item.first_name} {item.last_name} </p>
                    <p className="mb-1"><u><a href="">{item.email}</a></u></p>
                    <p className="mb-1">{item.number}</p>
                    <p className="mb-1">{item.gender == 'M' ? 'Male' : item.gender == 'F' ? 'Female' : ''} </p>


                    <div className="justify-end end text-end gap-2 items-end ">
                        <CustomButton onClick={() => deleteItem(item)} className='p-2 mx-2 bg-red-500 opacity-80 text-white rounded-full' >
                            <RiDeleteBin6Line size={20} />
                        </CustomButton>
                        <CustomButton onClick={() => editItem(item)} className=' p-2 bg-green-500 opacity-80 text-white rounded-full' >
                            <FaUserEdit size={18} />
                        </CustomButton>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default EmployeeCardItem