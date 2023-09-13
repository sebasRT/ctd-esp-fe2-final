import {  screen} from '@testing-library/react';
import { render } from '../test-utils';
import Bio from '../features/bio/Bio';

describe('bio',()=>{
    test('should render "bio Container"', ()=>{
        render(<Bio></Bio>)
        const bioContainer = screen.getByTestId("bioContainer")
        expect(bioContainer).toBeInTheDocument()
    })
})