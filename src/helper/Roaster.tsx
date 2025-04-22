import { roastLines } from "@/data/roastLines";

const colourScheme: Record<number, string> = {
  0: "#FFFF00", // yellow
  1: "#FF00FF", // magenta
  2: "#00FFFF", // cyan
};

// fallback if index goes beyond the defined keys
const getColorByIndex = (index: number): string => {
  const keys = Object.keys(colourScheme).map(Number);
  return colourScheme[index % keys.length] || "#FFFFFF";
};

const spanStylingCloser = `</span>`;

export function roastCode(code: string | undefined): string[] {
  if (!code) {
    return ["You're safe... for now. But bugs move faster than you blink. 👀"];
  }

  const lines = code.split("\n");
  const roasts: string[] = [];

  if (lines.length === 1 && code.trim().startsWith("//")) {
    const color = getColorByIndex(2);
    const spanStylingOpener = `<span style="color: ${color}; font-weight: bold; font-size: 1.2em;">`;
    roasts.push(
      `${spanStylingOpener}Remove the comments first, then we'll talk. 😏${spanStylingCloser}<br/>`
    );
  }

  lines.forEach((line, index) => {
    roastLines.forEach(({ pattern, message }) => {
      if (pattern.test(line)) {
        const color = getColorByIndex(roasts.length);
        const spanStylingOpener = `<span style="color: ${color}; font-weight: bold; font-size: 1.2em;">`;
        roasts.push(
          `${spanStylingOpener}Line ${
            index + 1
          }:${spanStylingCloser} ${message} <br/>`
        );
      }
    });
  });

  const maxRoasts = 5;
  const displayedRoasts = roasts.slice(0, maxRoasts);

  if (roasts.length > maxRoasts) {
    const color = getColorByIndex(maxRoasts);
    const spanStylingOpener = `<span style="color: ${color}; font-weight: bold; font-size: 1.2em;">`;
    displayedRoasts.push(
      `${spanStylingOpener}Too many roasts. Your code needs therapy. 😭${spanStylingCloser}`
    );
  }

  return displayedRoasts.length
    ? displayedRoasts
    : ["You're safe... for now. But bugs move faster than you blink. 👀"];
}
