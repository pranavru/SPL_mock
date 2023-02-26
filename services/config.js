var Chance = require('chance');

var chance = new Chance();

module.exports = {
  /**
  * 


  */
  getConfig: async (options) => {

    // Implement your business logic here...
    //
    // Return all 2xx and 4xx as follows:
    //
    // return {
    //   status: 'statusCode',
    //   data: 'response'
    // }

    // If an error happens during your business logic implementation,
    // you can throw it as follows:
    //
    // throw new Error('<Error message>'); // this will result in a 500

    var data = {
        "created_at": chance.string(),
        "name": chance.string(),
        "status": chance.string(),
        "updated_at": chance.string(),
        "value": chance.string(),
        "version": chance.string(),
      },
      status = '200';

    return {
      status: status,
      data: data
    };  
  },
};
