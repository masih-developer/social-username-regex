export default class TelegramUsername {
  static countOfUsernames(number) {
    const powerOfMinusOne = number - 1;
    const powerOfMinusTwo = number - 2;

    const withoutUnderscore = 26 * 36 ** powerOfMinusOne;
    const withUnderscore = 26 * 36 ** powerOfMinusTwo * powerOfMinusTwo;

    return withoutUnderscore + withUnderscore;
  }

  static sumOfCountOfUsernames(numbers) {
    return numbers.reduce(
      (sum, number) => sum + TelegramUsername.countOfUsernames(number),
      0
    );
  }
}
