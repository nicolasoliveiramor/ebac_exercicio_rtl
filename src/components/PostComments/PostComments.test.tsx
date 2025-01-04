import { fireEvent, render, screen } from '@testing-library/react';
import PostComment from '.';

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    test('Deve adicionar dois comentarios', () => {
        render(<PostComment/>);

        fireEvent.change(screen.getByTestId('comment-area'), { 
            target: { 
                value: 'Comentario aleatorio' 
            } 
        });
        
        fireEvent.click(screen.getByTestId('confirma-comment'));


        fireEvent.change(screen.getByTestId('comment-area'), { 
            target: { 
                value: 'Segundo Comentario aleatorio' 
            } 
        });        
        
        fireEvent.click(screen.getByTestId('confirma-comment'));

        expect(screen.getAllByTestId('comments')).toHaveLength(2);
    });
});