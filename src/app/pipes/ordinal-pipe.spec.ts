import { OrdinalPipe } from './ordinal-pipe';

describe('OrdinalPipe', () => {
 it('create an instance', () => {
    const pipe = new OrdinalPipe();
    expect(pipe).toBeTruthy();

    // First branch
    expect(pipe.transform(21)).toBe('21st');
    expect(pipe.transform(22)).toBe('22nd');
    expect(pipe.transform(23)).toBe('23rd');
    expect(pipe.transform(24)).toBe('24th');

    // Second branch (missing before)
    expect(pipe.transform(1)).toBe('1st');
    expect(pipe.transform(2)).toBe('2nd');
    expect(pipe.transform(3)).toBe('3rd');

    // Fallback branch
    expect(pipe.transform(0)).toBe('0th');
    expect(pipe.transform(10)).toBe('10th');
    expect(pipe.transform(11)).toBe('11th');
    expect(pipe.transform(12)).toBe('12th');
    expect(pipe.transform(13)).toBe('13th');
    expect(pipe.transform(100)).toBe('100th');
    expect(pipe.transform(110)).toBe('110th');

    // NaN branch
    expect(pipe.transform(NaN)).toBe('');
});
});
