import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export function makeSlug(length = 5): string {
  // The "URL and Filename safe" Base 64 Alphabet
  // https://tools.ietf.org/html/rfc4648

  // 1. Slug is exactly ${length} characters
  // 2. Slug canc contain 6 * ${length} bits
  // 2. Slug has 62 options (26 upper, 26 lower, 10 digit)
  // 3. '-' + '_' are not used for now are reserved for future use
  // 4. Slug can contain 62 ^ ${length} unique values (916,132,832 values for length 5)
  // 5. Slugs are generated in a random order and collisions can happen

  const chars =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  let slug = '';

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * 62);
    slug += chars[randomIndex];
  }

  return slug;
}

export const ActiveUser = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    return typeof request.user === 'object' ? request.user : null;
  },
);
