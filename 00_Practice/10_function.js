function writeLogFile(id, contents) {
    // writes a log file to our file system
    console.log(`logs/${id}`, contents);
}
writeLogFile(1, "sourabh")