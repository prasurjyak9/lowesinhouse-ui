import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { MemoryRouter } from 'react-router-dom';
import {ThemeProvider} from '@backyard/react';
import ReviewerLandingPage from './ReviewerLandingPage';

describe('Question Form Tests', () => {

    it('renders', () => {

        render(

            <ThemeProvider theme="light">
                <MemoryRouter><ReviewerLandingPage /></MemoryRouter></ThemeProvider>

        )
        const card = screen.getByTestId('Reviewdiv')
        expect(card).toBeInTheDocument()



    })

})