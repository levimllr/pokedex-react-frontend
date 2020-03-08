const capitalizeFirstLetter = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const heightConverter = (height: number) => {
  const decimetersPerInch = 3.93701;
  const totalInches = Math.round(height * decimetersPerInch);
  const feet = Math.floor(totalInches / 12);
  const inches = totalInches % 12;
  let heightString = '';
  if (feet > 0) {
    heightString += `${feet}' `;
  }
  heightString += `${inches}"`;
  return heightString;
};

const weightConverter = (weight: number) => {
  const poundsPerHectogram = 0.220462;
  const pounds = Math.round(weight * poundsPerHectogram);
  return `${pounds} lbs`;
};

export { heightConverter, weightConverter, capitalizeFirstLetter };
