import { createDelimiterRegex } from "@/shared/utils";

class StringTokenizer {
  tokenize(numbersString, delimiters) {
    return numbersString.split(createDelimiterRegex(delimiters));
  }
}

export default StringTokenizer;
