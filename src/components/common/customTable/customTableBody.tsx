type TableProps = {
    tableHeaders: { id: number, title: string }[]
    children: React.ReactNode
}

const CustomTable: React.FC<TableProps> = ({ tableHeaders, children }) => {
    return (
        <div className="p-5 pt-[12px] px-0 overflow-hidden">
            <table className="w-full text-left table-auto min-w-max">
                <thead>
                    <tr>
                        {tableHeaders.map((header) => (
                            <th key={header.id} className="border border-black/20 bg-green-500 p-4 ">
                                <p className="block antialiased  text-sm text-white font-semibold ">{header.title}</p>
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody className="bg-white">
                    {children}
                </tbody>
            </table>
        </div>
    )
}

export default CustomTable
