import sql from "./p-db";

export async function createUser(email, password) {
  try {
    // Use template literals to safely insert values into the query
    const [user] = await sql`
      INSERT INTO users (email, password) 
      VALUES (${email}, ${password}) 
      RETURNING id
    `;

    // Return the newly created user's id
    return user.id;
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  }
}

export async function getUserByEmail(email) {
  try {
    // Use template literals to execute the query
    const [user] = await sql`
      SELECT * FROM users WHERE email = ${email}
    `;

    // Return the user object (or undefined if no user is found)
    return user;
  } catch (error) {
    console.error("Error fetching user:", error);
    throw error;
  }
}
