import { test, expect, request } from '@playwright/test';

test('GET users returns list', async () => {
  const api = await request.newContext({ baseURL: 'https://reqres.in' });
  const res = await api.get('/api/users?page=2');
  expect(res.status()).toBe(200);
});
