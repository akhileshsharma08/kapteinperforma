
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    userphone: {
      type: String,
      required: false,
    },
    password: {
      type: String,
      required: false,
    },
    token: {
      type: String,
    },
  },
  { timestamps: true }
);

// const User = mongoose.model('User', userSchema);

// export default User;
const User = mongoose.models.User || mongoose.model("User",userSchema)

export default User
