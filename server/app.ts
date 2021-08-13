import express, { Application } from 'express';
const app: Application = express();

const port: any = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port: ${port}`));