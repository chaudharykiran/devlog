import { describe, it, expect } from 'vitest';

describe('API mocking with MSW', () => {
  it('should fetch post data', async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const post = await response.json();

    expect(response.status).toBe(200);
    expect(post).toEqual({
      userId: 1,
      id: 1,
      title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    });
  });
});