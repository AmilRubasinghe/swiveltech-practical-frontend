import { InputHTMLAttributes } from "react";
import { DetailedHTMLProps } from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";
import clsx from "clsx";
import { FieldErrors, Path } from "react-hook-form";

type CustomSelectProps<T extends FieldValues> = DetailedHTMLProps<
    InputHTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement
> & {
    label?: string;
    register: UseFormRegister<T>;
    name: Path<T>;
    options: { label: string, value: string }[]
    errors: FieldErrors<T>;
};

const baseClass = 'block  text-sm w-full px-3 py-3 mt-1 text-black bg-gray-200 border rounded-sm focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-60';
const errorClass = 'block text-sm w-full px-2 py-3 mt-1 text-black bg-gray-200 border rounded-sm focus:border-red-500 focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-60';

const CustomSelect = <T extends FieldValues>({
    label,
    register,
    name,
    errors,
    options,
    ...props
}: CustomSelectProps<T>) => {
    return (
        <div className="mb-5 w-full">
            {label && <label htmlFor={name} className="block text-sm pl-1 font-medium text-gray-500">
                {label}
            </label>}
            <select
                className={clsx(baseClass, errors[name] && errorClass)}
                {...register(name)}
                {...props}
            >
                {options.map((option, index) => {
                    return <option key={index} value={option.value}>{option.label}</option>
                })}

            </select>

            {errors[name] && (
                <span className="block text-sm pl-1 font-normal text-red-500">{errors[name]?.message?.toString().toLowerCase() as string}</span>
            )}
        </div>
    )
}

export default CustomSelect