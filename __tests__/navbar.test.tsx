
import Navbar from '@/components/navbar/navbar'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'


describe('Navbar', () => {
    it('Should have Nav bar text', () => {
        render(<Navbar />)

        const heading = screen.getByText('Employee Manager')

        expect(heading).toBeInTheDocument()
    })
})