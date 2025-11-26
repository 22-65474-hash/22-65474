const http = require("http");
const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });

  res.end(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Profile</title>

      <style>
        body {
          margin: 0;
          padding: 0;
          font-family: 'Poppins', sans-serif;
          background: linear-gradient(135deg, #4f46e5, #6d28d9, #0ea5e9);
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          color: white;
        }

        .card {
          background: rgba(255, 255, 255, 0.12);
          border-radius: 20px;
          padding: 40px 50px;
          backdrop-filter: blur(15px);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.25);
          text-align: center;
          width: 380px;
          animation: fadeIn 1s ease;
        }

        h1 {
          font-size: 28px;
          margin-bottom: 12px;
          font-weight: 600;
        }

        .section {
          font-size: 20px;
          margin-bottom: 15px;
          opacity: 0.9;
        }

        .quote {
          font-size: 16px;
          font-style: italic;
          opacity: 0.85;
          margin-top: 15px;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      </style>

    </head>
    <body>
      <div class="card">
        <h1>I'm <span style="color:#93c5fd;">John Michael Bation</span></h1>
        <div class="section">BA-4102</div>
        <div class="quote">"Victory isn’t given — it’s respawned and earned."</div>
      </div>
    </body>
    </html>
  `);
});

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
