const http = require('http');
const fs = require('fs').promises;

const PORT = 3000;

const server = http.createServer(async (req, res) => {
    if (req.url === "/") {
        try {
            // Read the HTML file asynchronously
            const data = await fs.readFile('./home.html', 'utf-8');

            // Set the response headers
            res.writeHead(200, { 'Content-Type': 'text/html' });

            // Send the file content as the response
            res.end(data);
        } catch (err) {
            // Handle the error, like if the file is not found
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Error: Could not read file');
            console.error('File read error:', err);
        }
    } else {
        // If the request URL is not "/", return a 404 error
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404: Page Not Found');
    }
});

// Start the server
server.listen(PORT, () => {
    console.log(`Server started on PORT: ${PORT}`);
});
