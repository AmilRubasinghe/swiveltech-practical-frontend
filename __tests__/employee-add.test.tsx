
import EmployeeList from '@/app/employee/list/page';
import '@testing-library/jest-dom'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import { render, screen } from '@testing-library/react'
jest.mock('next/navigation', () => ({
    useRouter: () => ({
        push: jest.fn(),
        events: {
            on: jest.fn(),
            off: jest.fn(),
            emit: jest.fn(),
        },
        isFallback: false,
    }),
}));



describe('EmployeeList', () => {
    const initialState = { output: 10 }
    const mockStore = configureStore()
    let store, wrapper
    it('renders a heading', () => {
        store = mockStore(initialState)
        const { getByText } = render(<Provider store={store} children={<div />}></Provider>)
        render(<EmployeeList />)

        const heading = screen.getByRole('button', { name: 'ADD EMPLOYEE' })

        expect(heading).toBeInTheDocument()
    })
})