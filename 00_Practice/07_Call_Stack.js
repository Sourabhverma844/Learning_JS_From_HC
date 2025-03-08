// save a user to our database
function saveUser(user) {
    db.save(user);
}

// update our users name in the database
function updateUserName(userId, name) {
    saveUser({ id: userId, name: name });

    console.log("User Updated");
}

updateUserName(123, "Charles");