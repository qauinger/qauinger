export async function POST({ request }) {
    const { name, email, message } = await request.json();

    console.log("New message received:", { name, email, message });

    // You can send an email or save it in a database here.

    return new Response(JSON.stringify({ success: true, message: "Message received!" }), {
        headers: { "Content-Type": "application/json" },
        status: 200
    });
}
