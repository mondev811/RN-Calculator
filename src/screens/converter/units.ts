export type Measure = keyof typeof Multipliers;

export type Units =
  | keyof typeof Multipliers['Currency']
  | keyof typeof Multipliers['Length']
  | keyof typeof Multipliers['Volume'];

export const Multipliers = {
  Currency: {
    'Europe (Euro)': 1,
    'Mexico (Peso)': 1,
    'United Kingdom (Pound)': 1,
    'United States (Dollar)': 1,
    'Vietnam (Dong)': 1,
  },
  Length: {
    Nanometers: 1609344000000,
    Microns: 1609344000,
    Milimeters: 1609344,
    Centimeters: 160934.4,
    Meters: 1609.344,
    Kilometers: 1.609344,
    Inches: 63360,
    Feet: 5280,
    Yards: 1760,
    Miles: 1,
    'Nautical miles': 0.868976,
  },
  Volume: {
    Mililiters: 4546.09,
    'Cubic centimeters': 4546.09,
    Liters: 4.54609,
    'Cubic meters': 0.004546,
    'Teaspoons (US)': 922.3295,
    'Tablespoons (US)': 307.4432,
    'Fluid ounces (US)': 153.7216,
    'Cups (US)': 19.2152,
    'Pints (US)': 9.607599,
    'Quarts (US)': 4.8038,
    'Gallons (US)': 1.20095,
    'Cubic inches': 277.4194,
    'Cubic feet': 0.160544,
    'Cubic yards': 0.005946,
    'Teaspoons (UK)': 768,
    'Tablespoons (UK)': 256,
    'Fluid ounces (UK)': 160,
    'Pints (UK)': 8,
    'Quarts (UK)': 4,
    'Gallons (UK)': 1,
  },
};
