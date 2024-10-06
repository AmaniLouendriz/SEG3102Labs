import { User } from './user';

describe('User', () => {
  it('should create an instance', () => {
    expect(new User(100,"first","last","1234567890","first@last.com")).toBeTruthy();
  });
});
