
  export async function loader() {
    const response = await fetch("https://cloud.umami.is/script.js");
    
    if (!response.ok) {
      throw new Response("Failed to fetch script", { status: response.status });
    }
  
    // Pass the fetched content along to the client
    const script = await response.text();
    return new Response(script, {
      status: 200,
      headers: {
        "Content-Type": "application/javascript",
        "Cache-Control": "public, max-age=31536000, immutable",
      },
    });
  }
  