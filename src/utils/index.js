function mapRawRowToRespectiveObject(workerData) {
  return workerData.map((rowData) => {
    return {
      user: {
        first_name: rowData.firstname,
        DOB: rowData.dob,
        address: rowData.address,
        ph_number: rowData.phone,
        state: rowData.state,
        zip_code: rowData.zip.replace("-", ""),
        email: rowData.email,
        gender: rowData.gender,
        userType: rowData.userType,
      },
      agent: {
        agent_name: rowData.agent,
      },
      userAccount: {
        account_name: rowData.account_name,
      },
      lob: {
        category_name: rowData.category_name,
      },
      carrier: {
        company_name: rowData.company_name,
      },
      policy: {
        policy_number: rowData.policy_number,
        policy_start_date: rowData.policy_start_date,
        policy_end_date: rowData.policy_end_date,
      },
    };
  });
}

module.exports = {
  mapRawRowToRespectiveObject,
};
