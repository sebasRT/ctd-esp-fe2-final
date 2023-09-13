import { cleanup, screen} from '@testing-library/react';
import { render } from '../test-utils';
import user from '@testing-library/user-event'
import Cita from '../features/quote/Cita';

describe('cita',()=>{
    
    test('should display a random quote after clicking the "obtener cita aleatoria" button', async ()=>{
        render(<Cita></Cita>)   
        user.setup()
        const getRandomQuoteButton = screen.getByRole('button', {  name: /obtener cita aleatoria/i})
        await user.click(getRandomQuoteButton)
        const quoteText = screen.queryByText(/no se encontro ninguna cita/i)
        expect(quoteText).not.toBeInTheDocument()
    } ) 

    test('should render input "author Cita "', ()=>{
        render(<Cita></Cita>)
        const inputName =  screen.getByRole('textbox', {  name: /author cita/i})
        expect(inputName).toBeInTheDocument() 
    });
    
    
    test('input should have the given value',async ()=>{
        user.setup()
        render(<Cita></Cita>)
        const inputName =  screen.getByRole('textbox', {  name: /author cita/i})
        await user.type(inputName,"Homer")
        expect(inputName).toHaveValue("Homer")
        
    });
    
    
    test("should display an error message if the given name is not valid" ,async ()=>{
        user.setup();
        render(<Cita></Cita>)
        const inputName =  screen.getByRole('textbox', {  name: /author cita/i})
        await user.type(inputName,"123")
        const getRandomQuoteButton = screen.getByRole('button', {  name: /obtener cita/i})
        await user.click(getRandomQuoteButton)
        const errorMessage = await screen.findByText(/por favor ingrese un nombre válido/i,{},{timeout: 3000})
        
        expect(errorMessage).toBeInTheDocument()
    })
    
    test('should display a testing quote after giving a valid name', async()=>{
        user.setup()
        render(<Cita></Cita>)
        const inputNameValue = "Homer"
        const inputName =  screen.getByRole('textbox', {  name: /author cita/i})
        await user.type(inputName,inputNameValue)
        expect(inputName).toHaveValue(inputNameValue)
        
        const getRandomQuoteButton = screen.getByRole('button', {  name: /obtener cita/i})
        await user.click(getRandomQuoteButton)

        const testingQuote = await screen.findByText(/this is a testing quote/i,{},{timeout: 2000})
        expect(testingQuote).toBeInTheDocument()
    })
    
    test('should delete the given value and quote after clicking "borrar" button',async ()=>{
        user.setup()
        render(<Cita></Cita>)
        const inputNameValue = "Homer"
        const inputName =  screen.getByRole('textbox', {  name: /author cita/i})
        await user.type(inputName,inputNameValue)
        
        const getRandomQuoteButton = screen.getByRole('button', {  name: /obtener cita/i})
        await user.click(getRandomQuoteButton)

        const deleteButton = screen.getByRole('button', { name: /borrar/i})
        await user.click(deleteButton)
        const quoteText = screen.queryByText(/no se encontro ninguna cita/i)
        expect(quoteText).toBeInTheDocument()
   
    }
        )
    afterEach(()=>{
         cleanup()
     })
})
