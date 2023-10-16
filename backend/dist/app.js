"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express4_1 = require("@apollo/server/express4");
const graphql_1 = __importDefault(require("./graphql"));
async function init() {
    const app = (0, express_1.default)();
    app.use(express_1.default.json());
    app.get("/", (req, res) => {
        res.json({ message: "server is running" });
    });
    app.use("/graphql", (0, express4_1.expressMiddleware)(await (0, graphql_1.default)()));
    app.listen(5000, () => console.log("server running on port 5000"));
}
;
init();
//# sourceMappingURL=app.js.map