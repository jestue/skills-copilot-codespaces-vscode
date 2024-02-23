// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Create a comment
app.post('/comments', (req, res) => {
  res.send('You have sent a POST request');
});

// Read all comments
app.get('/comments', (req, res) => {
  res.send('You have sent a GET request');
});

// Read one comment
app.get('/comments/:id', (req, res) => {
  res.send('You have sent a GET request with id ' + req.params.id);
});

// Update a comment
app.put('/comments/:id', (req, res) => {
  res.send('You have sent a PUT request with id ' + req.params.id);
});

// Delete a comment
app.delete('/comments/:id', (req, res) => {
  res.send('You have sent a DELETE request with id ' + req.params.id);
});

app.listen(port, () => {
  console.log('Server is running on port ' + port);
});
```

## 4. Middleware
Middleware is a function that is executed during the request-response process. It has access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle. The next middleware function is commonly denoted by a variable named next.

Middleware can perform the following tasks:

- Execute any code.
- Make changes to the request and the response objects.
- End the request-response cycle.
- Call the next middleware function in the stack.

```javascript
// Path: middleware.js
const express = require('express');
const app = express();
const port = 3000;

// Middleware function
const myMiddleware = (req, res, next) => {
  console.log('This is a middleware function');
  next();
};

app.use(myMiddleware);

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(port, () => {
  console.log('Server is running on port ' + port);
});
```

## 5. Error handling
Error handling in Express is done using middleware. Middleware that has four arguments is considered an error-handling middleware. When you call next with an error, the error-handling middleware is called.

```javascript
// Path: error-handling.js
const express = require('express');
const app = express();
const port = 3000;

app.get('/',