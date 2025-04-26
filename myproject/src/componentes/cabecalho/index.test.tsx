import {render} from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import '@testing-library/jest-dom/extend-expect'
import Cabe from './index'

describe('Testes de busca de elementos por classes', () => {

    it('Encontrar Classe do elemento principal', () => {

        const {container} = render(
            <MemoryRouter>
                <Cabe/>
            </MemoryRouter>
        );
    expect(container.getElementsByClassName('diviCabe').length)
                .toBeGreaterThan(0);
    })
})
export{}