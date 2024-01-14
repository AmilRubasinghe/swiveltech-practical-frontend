import React, { Children } from 'react'
interface Props {
    name: string;
    children: React.ReactNode;

}
const EmployeeFormInput = (props: Props) => {
    const { name, children } = props
    return (
        <div>
            <div className='flex gap-3'>
                <div className='basis-1/6 mt-2 '>{name}</div>
                <div className='basis-5/6  w-lvw'>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default EmployeeFormInput