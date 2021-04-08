const mongoose=require('mongoose');
const schema = mongoose.Schema;

const Message = new schema({
    text: {
      type: String,
      required: true
    },
    username: String,
    date: {
      type: Date,
      default: Date.now,
      index: 1
    },
    type: {
        type: String,
        enum : ['chat','service', 'login', 'logout'],
        default: 'chat'
      },
});

  module.exports = mongoose.model('Message', Message);
