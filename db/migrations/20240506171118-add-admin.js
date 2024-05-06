export const up = async (db, client) => {
    // TODO write your migration here.
    // See https://github.com/seppevs/migrate-mongo/#creating-a-new-migration-script
    // Example:
    // await db.collection('albums').updateOne({artist: 'The Beatles'}, {$set: {blacklisted: true}});
    await db.collection("users").insertOne({
        username: "RedzoE",
        password: '$2a$10$eYJcKSoaRGdi/dTXPmqg1uesKhBInTo/Ybm3Ly6R5tctiY3fLWfF.',
        email: "redzo@gmail.com",
        name: "Redzo Efendic",
        role: "admin"
  })
};

export const down = async (db, client) => {
    // TODO write the statements to rollback your migration (if possible)
    // Example:
    // await db.collection('albums').updateOne({artist: 'The Beatles'}, {$set: {blacklisted: false}});
   await db.collection("users").deleteOne({
    username: "RedzoE"})
};
