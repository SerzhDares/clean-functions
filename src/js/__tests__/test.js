import healthLevel from '../app';

test.each([
    [{name: 'Маг', health: 90}, 'healthy'], 
    [{name: 'Маг', health: 40}, 'wounded'],
    [{name: 'Маг', health: 10}, 'critical'],
])('health level', (obj, expected) => {
    const recieved = healthLevel(obj);
    expect(recieved).toBe(expected);
})