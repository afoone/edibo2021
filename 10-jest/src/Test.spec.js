import { render, screen, waitFor } from '@testing-library/react'
import Test from './Test'

describe(
    "renderiza correctamente el texto",
    () => {

        beforeEach(
            () => {
                render(<Test texto={"hola mundo"} />)
            }
        )

        it(
            "renderiza el texto correcto",
            () => {
                const elemento = screen.findByText(/hola mundo/i, "h1")
                expect(elemento).toBeTruthy()
            }
        )
    }
)