import { render, screen } from "@testing-library/react"

import Post from "../index"

describe('Deve renderizar o componente Post corretamente', () => {
    render(<Post children="Comentario aleatorio" imageUrl="Imagem qualquer"  />)   
    test('Deve renderizar o comentario corretamente', () => {
        expect(screen.getByText('Comentario aleatorio')).toBeInTheDocument()
    })
})