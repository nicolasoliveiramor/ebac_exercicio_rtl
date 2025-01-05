import { fireEvent, render, screen } from '@testing-library/react';
import PostComment from '..';

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    test('Deve adicionar dois comentarios', () => {
        render(<PostComment/>);

        const addComment = (text: string) => {
            fireEvent.change(screen.getByTestId('comment-area'), { 
                target: { 
                    value: text
                } 
            });
            
            fireEvent.click(screen.getByTestId('confirma-comment'));
        }

        addComment('Primeiro comentario');
        addComment('Segundo comentario');

        expect(screen.getAllByTestId('comments')).toHaveLength(2);
    });
});