import { DecimalTransformerPipe  } from './decimal-transformer.pipe';

describe('DecimalTransformerPipe', () => {
  it('create an instance', () => {
    const pipe = new DecimalTransformerPipe();
    expect(pipe).toBeTruthy();
  });
});
