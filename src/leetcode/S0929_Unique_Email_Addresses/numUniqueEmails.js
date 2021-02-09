/**
 * @param {string[]} emails
 * @return {number}
 */
const numUniqueEmails = (emails) => {
  const newEmails = emails.map((email) => {
    const arr = email.split('@');
    const local = arr[0];
    const host = arr[1];
    const uniqLocal = local.split('+')[0].replace(/\./g, '');
    return `${uniqLocal}@${host}`;
  });
  return new Set(newEmails).size;
};

// const numUniqueEmails = function(emails) {
//   const res = {};
//   let ans = 0;
//   for (let email of emails) {
//     const arr = email.split('@');
//     const local = arr[0];
//     const host = arr[1];

//     if (host in res === false) {
//       res[host] = [];
//     }
//     const validLocal = local.split('+')[0].replace(/\./g, '');
//     if (!res[host].includes(validLocal)) {
//       res[host].push(validLocal);
//       ans += 1;
//     }
//   }
//   return ans;
// };
