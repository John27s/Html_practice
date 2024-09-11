async function fetchUserData() {
    console.log("Fetching user data...");
    // Simulate a delay, e.g., fetching data from an API
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log("User data fetched!");
    return { name: "John Doe" };
  }
  
async function displayUserName() {
try {
    const userData = await fetchUserData();
    console.log("User name:", userData.name);
} catch (error) {
    console.error("Error:", error);
}
}

console.log("Start");
displayUserName().then(() => {
console.log("End");
});