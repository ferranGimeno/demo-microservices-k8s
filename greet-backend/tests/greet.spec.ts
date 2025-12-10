import { describe, it, expect } from "vitest";
import { greet } from '../src/index.js';

describe('greet', () => {
  it('should greet the given name', () => {
    expect(greet('Test')).toBe('Hello, Test!');
    expect(greet('World')).toBe('Hello, World!');
  });
});
