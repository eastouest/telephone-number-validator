function telephoneCheck(str) {

let checkPass = /^(?=[{1}]\s+\d{3}\s+)|^(?=[{1}]\s+[\(]\d{3}[\)]\s+\d{3})|^(?=[{1}][\(]\d{3}[\)]\d{3}[-])|^(?=[\(]\d{3}[\)]\d{3}[-]\d{4})|(?=\d{,10})|^(?=\d{3}[-]\d{3}[-]\d{4})|^[0-9]{10,10}$|^(?=[{1}]\s+\d{3}[-]\d{3}[-]\d{4})/

//Explanation of checkPass
  ///  ^                 - Beginning of string
  /// (?=                - Look ahead from current position
  ///   [{1}]\s+         - Starts with a 1 followed by a space,
  /// \d                 - followed by a digit
  /// {3}                - three characters in length,
  //\s+                  - and followed by a space
  // |                   - or
  ///  ^                 - Beginning of string
  /// (?=                - Look ahead from current position
  ///[{1}]\s+            - Starts with a 1 followed by a space,
  // [\(]                - an opening parenthesis,
  /// \d{3}              - a digit three characters in length,
  // [\)]\s+             - a closing parenthesis,
  //\s+                  - a space,
  /// \d{3}              - and a digit three characters in length
  /// |                  - or
  ///  ^                 - Beginning of string
  /// (?=                - Look ahead from current position
  ///[{1}]               - Starts with a 1,
  // [\(]                - an opening parenthesis,
  /// \d{3}              - a digit three characters in length,
  // [\)]                - a closing parenthesis,
  /// \d{3}              - a digit three characters in length,
  ///[-]                 - and a hyphen
  /// |                  - or
  ///  ^                 - Beginning of string
  /// (?=                - Look ahead from current position
  /// [\(]               - Starts with an opening parenthesis,
  /// \d{3}              - a digit three characters in length,
  // [\)]                - a closing parenthesis,
  /// \d{3}              - a digit three characters in length,
  // [-]                 - a hyphen
  /// \d{4}              - a digit four characters in length,
  /// |                  - or
  /// (?=                - Look ahead from current position
  ///\d                  - Starts with a digit
  /// {,10}              - no more than 10 characters in length
  /// |                  - or
  ///  ^                 - Beginning of string
  /// (?=                - Look ahead from current position
  /// \d{3}              - Starts with digit three characters in length,
  // [\)]                - a closing parenthesis,
  /// \d{3}              - a digit three characters in length,
  // [-]                 - a hyphen,
  /// \d{3}              - a digit three characters in length,
  // [-]                 - a hyphen,
  /// \d{4}              - a digit four characters in length,
  //|                    - or
  //^                    - Beginning of string
  //[0-9]                - Starts with a digit
  //{10,10}              - exactly 10 characters in length
  //$                    - End of string
  //|                    - or
  //^                    - Beginning of string
  /// (?=                - Look ahead from current position
  ///[{1}]\s+            - Starts with a 1 followed by a space,
  //\d{3}                - a digit three characters in length,
  // [-]                 - a hyphen,
  //\d{3}                - a digit three characters in length,
  // [-]                 - a hyphen,
  //\d{3}                - and a digit four characters in length

  return checkPass.test(str);
}


console.log(telephoneCheck("1 (555) 555-5555"));
