"use server";
import { connectToDatabase } from "@/db/connect";
import { getProduct } from "./products";

export async function addToCart(userId, productId, quantity = 1) {
  try {
    const db = await connectToDatabase();
    const collection = db.collection("cart");

    // Check if the user already has a cart
    const userCart = await collection.findOne({ userId });

    if (userCart) {
      // If the cart exists, check if the product is already in the cart
      const productIndex = userCart.products.findIndex(
        (product) => product.productId === productId
      );

      if (productIndex > -1) {
        // If the product exists, update its quantity
        userCart.products[productIndex].quantity += quantity;
      } else {
        // If the product does not exist, add it to the cart
        userCart.products.push({ productId, quantity });
      }

      // Update the cart in the database
      await collection.updateOne(
        { userId },
        { $set: { products: userCart.products } }
      );
    } else {
      // If no cart exists for the user, create a new one
      const newCart = {
        userId,
        products: [{ productId, quantity }],
      };

      await collection.insertOne(newCart);
    }
  } catch (error) {
    console.error("Error adding product to cart:", error.message);
  }
}

export async function getCartData(userId) {
  // Return empty if no userId is provided
  if (!userId) {
    return [];
  }

  const db = await connectToDatabase();
  const collection = db.collection("cart");

  // Query for the user's cart and retrieve only the products array
  const cartData = await collection.findOne(
    { userId }, // Match the document with the provided userId
    { projection: { products: 1, _id: 0 } } // Retrieve only the 'products' field
  );

  // If no cart data found, return empty
  if (!cartData || !cartData.products) {
    return [];
  }

  // Fetch detailed product data using the product IDs
  const detailedProducts = await Promise.all(
    cartData.products.map(async (product) => {
      const productDetails = await getProduct(product.productId);
      return {
        ...productDetails,
        quantity: product.quantity,
        userId: userId, // Include quantity from cart data
      };
    })
  );

  return detailedProducts; // Return an array of detailed product data
}

export async function removeProductFromCart(userId, productId) {
  try {
    const db = await connectToDatabase();
    const collection = db.collection("cart");

    // Update the user's cart by removing the specific product
    const result = await collection.updateOne(
      { userId },
      { $pull: { products: { productId } } } // Remove the object matching the productId
    );

    if (result.modifiedCount > 0) {
      return { success: true, message: "Product removed from cart" };
    } else {
      return { success: false, message: "Product not found in cart" };
    }
  } catch (error) {
    return { success: false, message: error.message };
  }
}

export async function placeOrder(userId) {
  try {
    const db = await connectToDatabase();
    const collection = db.collection("cart");

    // Clear the user's cart
    const result = await collection.updateOne(
      { userId },
      { $set: { products: [] } } // Set the products array to empty
    );

    if (result.modifiedCount > 0) {
      // Return a success response to trigger client-side actions
      return { success: true, message: "Order placed successfully!" };
    } else {
      return { success: false, message: "No cart found for the user." };
    }
  } catch (error) {
    console.error("Error placing order:", error.message);
    return { success: false, message: error.message };
  }
}
