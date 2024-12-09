export async function fetchProducts() {
  try {
    const response = await fetch("/api/products");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    if (data.success) {
      console.log("Products fetched successfully:", data.result);
      return data.result; // Returns the array of products
    } else {
      console.error("Error in API response:", data.error);
      return [];
    }
  } catch (error) {
    console.error("Failed to fetch products:", error.message);
    return [];
  }
}
