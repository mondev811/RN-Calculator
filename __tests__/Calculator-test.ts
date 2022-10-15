import {ConvertUnits, FormatDisplay} from '../src/utils/Calculator';

describe('Measure: Length', () => {
  test('convert 0.0 yards to microns', () => {
    expect(FormatDisplay(ConvertUnits('Length', 'Yards', 'Microns', 0.0))).toBe(
      '0',
    );
  });
  test('convert 89 centimeters to inches', () => {
    expect(
      FormatDisplay(ConvertUnits('Length', 'Centimeters', 'Inches', 89)),
    ).toBe('35.03937');
  });
  test('convert 58.01 microns to feet', () => {
    expect(
      FormatDisplay(ConvertUnits('Length', 'Microns', 'Feet', 58.01)),
    ).toBe('0.00019');
  });
  test('convert 58.01 yards to kilometers', () => {
    expect(
      FormatDisplay(ConvertUnits('Length', 'Yards', 'Kilometers', 58.01)),
    ).toBe('0.053044');
  });
  test('convert 58.01 nautical miles to miles', () => {
    expect(
      FormatDisplay(ConvertUnits('Length', 'Nautical miles', 'Miles', 58.01)),
    ).toBe('66.75672');
  });
});
