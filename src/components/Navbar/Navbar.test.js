
import React from 'react'
import {render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { MemoryRouter } from 'react-router-dom';
import Navbar from './Navbar';

describe('Snapshot testing Navbar', () => {
    it("test", () =>{
        render(
            <MemoryRouter>
                <Navbar></Navbar>
            </MemoryRouter>
            )

        expect(screen.getByTestId("navbar-test")).toMatchSnapshot();
        
    })
})

