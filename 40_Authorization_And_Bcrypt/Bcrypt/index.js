const bcrypt = require('bcrypt');

const hashPassword = async (pw) => {
    const hash = await bcrypt.hash(pw, 12);
    console.log("Hash:", hash);
}

const login = async (pw, hashedPw) => {
    const result = await bcrypt.compare(pw, hashedPw);
    if (result) {
        console.log("LOGIN SUCCESSFUL!")
    } else {
        console.log("LOGIN FAILED, TRY AGAIN!")
    }
}

// hashPassword('monkey');
// login('monkey', '$2b$12$TjRn/tNDI7BeL0ELMOGtfODLVhLIENc1NpWPtFxjpxDXR/dXNc7Qy')