const express = require('express');
const app = express();
const port = process.env.PORT || 3000;  // Render จะใช้พอร์ตนี้โดยอัตโนมัติ

app.get('/', (req, res) => {
  res.send('Gacha Backend');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
