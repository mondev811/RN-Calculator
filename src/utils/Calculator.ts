import {Multipliers, Units} from '../screens/converter/units';

export const ConvertUnits = (
  measure: keyof typeof Multipliers,
  inputUnits: Units,
  outputUnits: Units,
  value: number,
): number => {
  const inputMultiplier = Multipliers[measure][inputUnits];
  const outputMultiplier = Multipliers[measure][outputUnits];

  return (value * outputMultiplier) / inputMultiplier;
};

export const FormatDisplay = (value: number): string => {
  const regex = /[.,]*0+$/;
  return value.toFixed(6).replace(regex, '');
};
