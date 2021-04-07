import { render, screen } from '@testing-library/react';
import App from './App';

describe("renderiza los elementos básicos",
  () => {
    beforeEach(() => {
      render(<App />);
    })

    test('renders learn react link', () => {
      const linkElement = screen.getByText(/learn react/i);
      expect(linkElement).toBeInTheDocument();
    });

    test('escribe el párrafo ', () => {
      const linkElement = screen.getByText(/save to reload/i);
      expect(linkElement).toBeInTheDocument();
    });
  }
)




it(
  "que las dos variables sean true",
  () => {
    const variable = true;
    const variable2 = 90;
    expect(variable).toBeTruthy()
    expect(variable2).toBeTruthy()
  }
)

test(
  "que la variable sea pepito",
  () => {
    const variable = "pepito"
    expect(variable).toBe("pepito")
  }
)


