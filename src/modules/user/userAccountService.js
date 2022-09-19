const UserAccount = require("./UserAccount");

async function getSavedUserAccount(userAccount) {
  return await UserAccount.findOneAndUpdate(
    {
      account_name: userAccount.account_name,
    }, // find a document with that filter
    { $setOnInsert: userAccount }, // document to insert when nothing was found
    { upsert: true, new: true, runValidators: true, useFindAndModify: false }
  );
}

module.exports = {
  getSavedUserAccount,
};
