# Mock Service Worker (MSW) Setup

This directory contains the Mock Service Worker (MSW) setup for API mocking during development and testing.

## Files

- [handlers.ts](./handlers.ts) - Defines request handlers using `http.get`
- [browser.ts](./browser.ts) - Sets up the worker for the browser (using `setupWorker`)
- [node.ts](./node.ts) - Sets up the server for Node.js (using `setupServer`) for Vitest
- [index.ts](./index.ts) - Conditionally starts the appropriate mock based on environment

## Usage

### Testing

Mocks are automatically enabled in tests through [vitest.setup.js](../../vitest.setup.js).

## Adding New Mocks

1. Add a new handler to [handlers.ts](./handlers.ts)
2. The new mock will automatically be available in test environments
