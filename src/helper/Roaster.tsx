type RoastLine = {
  pattern: RegExp;
  message: string;
};

const roastLines: RoastLine[] = [
  {
    pattern: /var\s+/,
    message:
      "Using 'var'? Welcome to JavaScript Jurassic Park! Try 'let' or 'const', it's 2025. 🦕",
  },
  {
    pattern: /^(?!.*===).*==/,
    message:
      "One '=' short of a good decision. '===' could've saved you from a nightmare! 😵",
  },
  {
    pattern: /console\.log\([^)]*\);?/,
    message:
      "Dropping secrets in the console like it's a confessional. Privacy, ever heard of it? 🕵️",
  },
  {
    pattern: /function\s+[a-zA-Z_$][0-9a-zA-Z_$]*\s*\(/,
    message:
      "Old-school functions? Arrow functions are here to flex their muscles! ➡️💪",
  },
  {
    pattern: /any/,
    message:
      "Using 'any' is like saying 'meh' to TypeScript. Don't be that guy. 🤦",
  },
  {
    pattern: /as\s+any/,
    message: "'as any'? A shortcut to chaos. 🚨",
  },
  {
    pattern: /document\.getElementById/,
    message:
      "Still using getElementById? Modern frameworks are judging you silently. 😶",
  },
  {
    pattern: /\.then\(/,
    message: "'then'? Async/await is waving from the future like 👋",
  },
  {
    pattern: /setTimeout\s*\(.*\,\s*0\s*\)/,
    message: "setTimeout with 0ms? That's just pretending to be async. 🎭",
  },
  {
    pattern: /\beval\(/,
    message:
      "Using eval? Congratulations, you've invited the hackers in for tea. ☕💀",
  },
  {
    pattern: /for\s*\(var\s+/,
    message: "'var' in a loop? Enjoy the rollercoaster of scope! 🎢",
  },
  {
    pattern: /catch\s*(\(\w*\))?\s*{\s*}/,
    message:
      "An empty catch block? Nice try dodging bugs like Neo from The Matrix. 🕶️",
  },
  {
    pattern: /Math\.random\(\)\s*\*\s*10\s*\|\|\s*0/,
    message: "Math.random with a twist of desperation. Lucky draw, anyone? 🎲",
  },
  {
    pattern: /parseInt\([^,)]*\)/,
    message:
      "Forgot to specify radix in parseInt? You've just thrown decimals into the wild. 🌪️",
  },
  {
    pattern: /new\s+Promise\s*\(\s*function\s*\(/,
    message:
      "Still writing Promises like it's 2015? Arrow functions are screaming in frustration. ➡️😩",
  },
  {
    pattern: /\bnull\b.*\|\|.*['"`]/,
    message:
      "Checking null like it's the only villain. Don't ignore undefined and 0, they're equally toxic. ☠️",
  },
  {
    pattern: /console\.log\(.{40,}\)/,
    message:
      "That console.log looks like a biography. Shorten it before it applies for a Pulitzer. 📰",
  },
  {
    pattern: /\/\/.*(fixme|todo)/i,
    message:
      "'TODO' found. Just a fancy way of saying 'Not my problem today'. 🗓️",
  },
  {
    pattern: /require\(/,
    message:
      "require()? import/export left the chat. Modern JS is knocking! 🚪",
  },
  {
    pattern: /console\.log\([^)]*password[^)]*\)/i,
    message: "Logging passwords? Even the NSA would blush. 🔐💥",
  },
  {
    pattern: /for\s*\(.*;.*;.*\)\s*{[^}]*console\.log[^}]*}/,
    message: "Logging inside loops? That CPU is begging for mercy. 🧠🔥",
  },
  {
    pattern: /(\w+)\s*=\s*\1/,
    message:
      "Assigning a variable to itself? Infinite loop of self-love detected. 💅",
  },
  {
    pattern: /document\.querySelectorAll\([^)]*\)\s*\[\d+\]/,
    message:
      "Accessing querySelectorAll like an array? Might work... until it doesn't. 🎯",
  },
  {
    pattern: /function\s+\w+\s*\([^)]*\)\s*{[^}]*}/,
    message:
      "This function is longer than my grocery list. Time for some trimming! ✂️",
  },
  {
    pattern: /Object\.keys\([^\)]*\)\s*\.forEach\(/,
    message:
      "Still stuck with Object.keys? Maps and filters are the cool kids now. 😎",
  },
  {
    pattern: /new\s+Date\(\)/,
    message:
      "new Date() again? Are you even aware of timezones or just winging it? ⏰",
  },
  {
    pattern: /console\.warn\([^)]*\)/,
    message: "Sending console warnings like motivational quotes? 😅",
  },
  {
    pattern: /\blet\s+[a-zA-Z_$][0-9a-zA-Z_$]*\s*=\s*undefined/,
    message: "Declaring let = undefined. Your variable just got ghosted. 👻",
  },
  {
    pattern: /function\s*\([^\)]*\)\s*{[^}]*}/,
    message: "Functions without return statements? More like a black hole. 🌌",
  },
  {
    pattern: /&&\s*\(.*\)\s*\|\|/,
    message: "Mixing && and || like a chaotic cocktail. Brace for bugs. 🍹",
  },
  {
    pattern: /\bconsole\.log\s*\(.+\)\s*;\s*$/,
    message:
      "Console logs in production? Hope you're not on a Netflix interview. 🎬",
  },
  {
    pattern: /\bnull\b.*==\s*undefined/,
    message: "Comparing null with undefined? Philosophers would be proud. 🤔",
  },
  {
    pattern: /for\s*\(.*;\s*.*;\s*.*\)\s*\{\s*.*console\.log[^}]*\}/,
    message:
      "Looping with console.log inside? CPU called, it wants a vacation. 🖥️🧳",
  },
  {
    pattern: /const\s+[a-zA-Z_$][0-9a-zA-Z_$]*\s*=\s*require\(/,
    message: "Still using require? You're stuck in CommonJS time warp! 🕰️",
  },
  {
    pattern: /\/\*[\s\S]*\*\//,
    message:
      "Multi-line comment detected. Hope it's not your resignation letter. ✍️",
  },
  {
    pattern: /new\s+Array\(\d*\)/,
    message: "Using new Array()? Spread some love with [...Array(n)]. 💞",
  },
  {
    pattern: /eval\([^\)]*\)/,
    message: "eval again? You must love playing with fire. 🔥",
  },
  {
    pattern: /delete\s+([a-zA-Z_$][0-9a-zA-Z_$]*\.)?[a-zA-Z_$][0-9a-zA-Z_$]*/,
    message: "Deleting variables? The JavaScript gods are not pleased. 🛐",
  },
  {
    pattern: /\bforEach\([^)]*\)/,
    message: "forEach is cool, but map/filter is smoother than jazz. 🎷",
  },
  {
    pattern: /let\s+[a-zA-Z_$][0-9a-zA-Z_$]*\s*=\s*.+\s*;/,
    message:
      "Used 'let' for a value that never changes? 'const' deserved a shot! 🧊",
  },
  {
    pattern: /async\s+function\s+/,
    message: "async function without await? That's async in spirit only. 👻",
  },
  {
    pattern: /const\s+[a-zA-Z_$][0-9a-zA-Z_$]*\s*=\s*\{\s*\}/,
    message: "Empty object assigned. Placeholder or just empty promises? 📦",
  },
  {
    pattern: /setInterval\([^\)]+\)/,
    message:
      "setInterval again? Hope you love infinite loops more than sanity. ♾️",
  },
  {
    pattern: /(\w+)\s*=\s*\1\s*;/,
    message: "Assigning a variable to itself again? Confidence overload! 😏",
  },
  {
    pattern: /\/\*\s*eslint-disable[\s\S]*\*\//,
    message:
      "Disabling ESLint? That's like removing your seatbelt before a crash. 💥",
  },
];

export function roastCode(code: string | undefined): string {
  if (!code) {
    return "You're safe... for now. But bugs move faster than you blink. 👀";
  }

  const lines = code.split("\n");
  const roasts: string[] = [];

  lines.forEach((line, index) => {
    roastLines.forEach(({ pattern, message }) => {
      if (pattern.test(line)) {
        roasts.push(`Line ${index + 1}: ${message}`);
      }
    });
  });

  if (
    roasts.length === 0 &&
    lines.length === 1 &&
    code.trim().startsWith("//")
  ) {
    roasts.unshift(
      `<span style="color: #FFD700;">Remove the comments first, then we'll talk. 😏</span>`
    );
  }

  const maxRoasts = 5;
  const displayedRoasts = roasts.slice(0, maxRoasts);

  if (roasts.length > maxRoasts) {
    displayedRoasts.push(
      `<span style="color: #FF6B6B;">Too many roasts. Your code needs therapy. 😭</span>`
    );
  }

  return displayedRoasts.length
    ? displayedRoasts
        .map((r) =>
          r.replace(/(Line \d+:)/, `<span style="color: #FFD700;">$1</span>`)
        )
        .join("<br/>")
    : "You're safe... for now. But bugs move faster than you blink. 👀";
}
