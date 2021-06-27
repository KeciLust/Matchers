import comparisonHealth from '../app';

const item = [
  { name: 'лучник', health: 80 },
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
];
test('comparison', () => {
  const received = comparisonHealth(item);
  expect(received).toEqual([
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'лучник', health: 80 },
  ]);
});
// test('com', () => {
//   const received = comparisonHealth(item);
//   expect(received).toBe([
//     { name: 'маг', health: 100 },
//     { name: 'лучник', health: 80 },
//     { name: 'лучник', health: 80 },
//   ]);
// });
