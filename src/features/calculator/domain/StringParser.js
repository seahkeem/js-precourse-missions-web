import { createDelimiterRegex } from "@/shared/utils";

class StringParser {

  parse(inputString, delimiters) {
    if (inputString.trim() === '') {
      return ['0'];
    }

    const regex = createDelimiterRegex(delimiters);
    return inputString.split(regex);
  }
}

export default StringParser;
