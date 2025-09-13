const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
  company: {
    type: String,
    required: true,
  },  
  title: {
    type: String,
    required: true,
  },  
  notes: {
    type: String,
  },  
  postingLink: {
    type: String,
  },  
  status: {
    type: String,
    enum: ['interested', 'applied', 'interviewing', 'rejected', 'accepted'],
  },
});

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  applications: [applicationSchema], // embedded applicationSchema
});

const User = mongoose.model('User', userSchema);

module.exports = User; // we only export the User, and not applicationSchema (application will be exported with user, since its already 'embedded' inside it)
