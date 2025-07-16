export function cn(
  ...classes: (string | string[] | undefined | false | null)[]
): string {
  return classes
    .flat() // flattens nested arrays (e.g., ['a', ['b', 'c']] => ['a', 'b', 'c'])
    .filter(Boolean) // removes falsy values like '', null, undefined, false
    .join(' '); // joins all class names into a single space-separated string
}
