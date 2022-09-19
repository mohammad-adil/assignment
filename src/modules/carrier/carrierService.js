const Carrier = require("./Carrier");

exports.getSavedCarrier = async (carrier) => {
  return await Carrier.findOneAndUpdate(
    {
      company_name: carrier.company_name,
    },
    { $setOnInsert: carrier },
    { upsert: true, new: true, runValidators: true, useFindAndModify: false }
  );
};
