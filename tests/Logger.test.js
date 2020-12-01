// import { Logger } from '@/utils/logger';
//
// describe('Logger', () => {
//   const logCached = console.log;
//
//   beforeEach(() => {
//     console.log = jest.fn();
//   });
//   afterAll(() => {
//     console.log = logCached;
//   });
//
//   const logger = new Logger({
//     scope: 'tests',
//     tags: ['jest'],
//   });
//
//   it('console.log the text "hello"', () => {
//     console.log = jest.fn();
//     logger.log('hello');
//     logCached(console.log.mock.calls);
//     expect(console.log).toHaveBeenCalledWith('', 'hello');
//   });
// });
