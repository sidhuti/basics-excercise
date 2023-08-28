import '@testing-library/jest-dom';

describe('Test Suite 1', ()=> {
    test('fail test case', () => {
        throw new Error('test suite failed...')
    })
})
