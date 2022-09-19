const { LOB } = require("../../models/index");

exports.getSavedLOB = async (lob) => {
  return await LOB.findOneAndUpdate(
    {
      category_name: lob.category_name,
    },
    { $setOnInsert: lob },
    { upsert: true, new: true, runValidators: true, useFindAndModify: false }
  );
};
