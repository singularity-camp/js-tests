function compare_strings_by_length(str1, str2) {
  if (str1 && str2) {
    return str1.length === str2.length ? true : false;
  }
  return false;
}

// const ans = compare_strings_by_length('ab', 'vcg');
// console.log(ans)

export default compare_strings_by_length;
