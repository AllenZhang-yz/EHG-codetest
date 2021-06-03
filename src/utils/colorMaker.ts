const fullColor = 0xFFFFFF;

export const colorMaker = (totalColorCount:number) => {
  // if total count is less than 0, then the default value is 256
  const total = totalColorCount > 0 ? totalColorCount : 0xFF;
  //divide the full color into total parts
  const perVal = fullColor / total;
  let generatedColor = [];
  for( let i = 0; i < total; i++ ) {
    // get the color hex code from each part
    const currentColor = Math.round(perVal * ( i + 1 ));
    generatedColor.push(`#${currentColor.toString(16).padStart(6, '0')}`);
  }
  //shuffle the array
  const shuffledColor = generatedColor.sort((a, b) => 0.5 - Math.random());
  return shuffledColor;
}