// const bcrypt = require('bcryptjs');

// const password = 'adminpassword';
// const hashedPassword = '$2a$10$du0XewQVPXxbrelHHYOhIO3Vr92kXWoPLVlmLVOTV4aqHgANLD/rq'; // Replace with the hashed password from your database

// bcrypt.compare(password, hashedPassword, (err, result) => {
//   if (err) {
//     console.error('Error comparing passwords:', err);
//   } else {
//     console.log('Password comparison result:', result); // Should be true if the hashes match
//   }
// });


// const bcrypt = require('bcryptjs');

// const password = 'adminpassword';

// // Hash the password
// bcrypt.genSalt(10, (err, salt) => {
//   if (err) throw err;

//   bcrypt.hash(password, salt, (err, hash) => {
//     if (err) throw err;

//     console.log('Hashed password:', hash);

//     // Compare the password with the hash
//     bcrypt.compare(password, hash, (err, result) => {
//       if (err) throw err;

//       console.log('Password comparison result:', result); // Should be true if the hashes match
//     });
//   });
// });

const bcrypt = require('bcryptjs');
const checkHash = async (req, res) => {
  const password = 'adminpassword';

  try {
    
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    console.log('hashedPassword: ', hashedPassword)

    const isValidPassword = await bcrypt.compare(password, hashedPassword);

    console.log('isValidPassword: ', isValidPassword);

  } catch (err) {
    console.log({ message: err.message });
  }
};
checkHash();