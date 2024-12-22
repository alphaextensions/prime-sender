export async function apiFetch(url, method = "GET", body = null, additionalHeaders = {}) {
    const headers = {
      "Content-Type": "application/json",
      ...additionalHeaders,
    };
  
    try {
      const response = await fetch(url, {
        method,
        headers,
        body: body ? JSON.stringify(body) : null,
      });
  
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.statusText}`);
      }
  
      return await response.json();
    } catch (error) {
      console.error("Error during fetch:", error);
      throw error; 
    }
  }
  