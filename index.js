module.exports.pranata = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Go Serverless v3.0! Get function executed successfully!",
        input: event,
      },
      null,
      2
    ),
  };
};

module.exports.pranatapost = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Go Serverless v3.0! Post function executed successfully!",
        input: event,
      },
      null,
      2
    ),
  };
};
