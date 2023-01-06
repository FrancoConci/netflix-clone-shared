describe('index tests', () => {
  it('exports loginErrors', () => {
    const errors = require('./index').loginErrors;
    expect(errors).not.toBeUndefined();
    expect(errors).not.toBeNull();
  });
});
