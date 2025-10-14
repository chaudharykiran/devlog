/* eslint-disable no-undef */
import '@testing-library/jest-dom';
import { server } from './app/mocks/node';

beforeAll(() => {
  server.listen({ onUnhandledRequest: 'error' });
});

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  server.close();
});