"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express4_1 = require("@apollo/server/express4");
const graphql_1 = __importDefault(require("./graphql"));
const user_1 = require("./services/user");
const cors_1 = __importDefault(require("cors"));
async function init() {
    const app = (0, express_1.default)();
    app.use(express_1.default.json());
    app.use((0, cors_1.default)());
    app.get("/", (req, res) => {
        res.json({ message: "server is running" });
    });
    app.use("/graphql", (0, express4_1.expressMiddleware)(await (0, graphql_1.default)(), {
        context: async ({ req }) => {
            //@ts-ignore
            const token = req.headers['token'];
            try {
                const user = user_1.UserService.decodeJWT(token);
                return { user };
            }
            catch (error) {
                return { error };
            }
        }
    }));
    app.listen(5000, () => console.log("server running on port 5000"));
}
;
init();
//# sourceMappingURL=app.js.map