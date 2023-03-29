// import { render, queryByAttribute } from 'react-testing-library';
// import App from './App';


// test("Show Flames Component, flames video and PokeApp text", () => {
//     const getById = queryByAttribute.bind(null, 'id');
//     const dom = render( <App/> );
//     const flamesVideo = getById(dom.container, 'flamesVideoID');
//     expect(flamesVideo).toBeInTheDocument();
// })

import { render, screen, waitFor } from '@testing-library/react';
import user from '@testing-library/user-event';
import App from './App';

test("Show POKEAPP text", () => {
    render(<App/>);
    const pokeAppTextLetter = screen.findAllByRole('span');
    expect(pokeAppTextLetter).toHaveLength(6);
});

test("Show flames video", () => {
    render(<App/>);
    const flamesVideo = screen.findAllByRole('video');
    expect(flamesVideo).toBeVisible();
});

// test("Clear button is working", () => {
//     render (<App/>);
//     const clearButton = screen.findByRole('button', {
//         name: /Clear/i
//     });
//     user.click(clearButton);
// });