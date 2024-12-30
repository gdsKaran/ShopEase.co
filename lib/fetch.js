// Fetch all products
export async function fetchAllProducts() {
  try {
    const url = "/api/products"; // API endpoint for all products
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    if (data.success) {
      return data.result; // Returns the list of all products
    } else {
      console.error("Error in API response:", data.error);
      return [];
    }
  } catch (error) {
    console.error("Failed to fetch all products:", error.message);
    return [];
  }
}

const fetchProductById = async (id) => {
  try {
    const response = await fetch("/api/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    const data = await response.json();
    if (response.ok) {
      console.log("Product data:", data.product);
    } else {
      console.error("Error:", data.error);
    }
  } catch (error) {
    console.error("Fetch error:", error);
  }
};
