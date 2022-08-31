import React from 'react'

import { render, fireEvent, screen } from '@testing-library/react'

import '@testing-library/jest-dom/extend-expect'

import { MemoryRouter } from 'react-router-dom';

import Footer from './Footer';



describe('Input value', () => {

    

    it("test footer ", () =>{

        render(<MemoryRouter> <Footer/> </MemoryRouter>)

        expect(screen.getByTestId("footer-test")).toMatchSnapshot()

    })

})