import { test, expect, request } from '@playwright/test';

test('GET users returns list', async () => {
  // Create a context without authentication
  const api = await request.newContext({ baseURL: 'https://reqres.in' });

  // Send GET request
  const res = await api.get('/api/users?page=2');

  // Validate status code
  expect(res.status()).toBe(200);

  // Optionally check response body
  const data = await res.json();
  expect(data.data.length).toBeGreaterThan(0);
});

