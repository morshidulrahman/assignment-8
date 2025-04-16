import express, { Request, Response } from "express";
import httpStatus from "http-status";
import router from "./app/routers";

const app = express();

//parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", router);

app.get("/", (req: Request, res: Response) => {
  res.json({
    message: "Bike Service Server is Running",
  });
});

// app.use(globalErrorHandler)

app.use((req: Request, res: Response) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: "Not Found",
    errorMessages: [
      {
        path: req.originalUrl,
        message: "API Not Found",
      },
    ],
  });
});
export default app;
