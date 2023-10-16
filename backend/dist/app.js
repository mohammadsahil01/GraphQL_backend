"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const server_1 = require("@apollo/server");
const express4_1 = require("@apollo/server/express4");
const prismadb_1 = __importDefault(require("./utils/prismadb"));
async function init() {
    const app = (0, express_1.default)();
    app.use(express_1.default.json());
    //create server
    const gqlServer = new server_1.ApolloServer({
        typeDefs: `
        type Query {
            name:String
            say(name:String):String
        }
        type Mutation {
            createUser(name:String!,password:String!,email:String!):Boolean
        }
        `,
        resolvers: {
            Query: {
                name: () => `hii`,
                say: (_, { name }) => `Hey ${name},  How are you?`
            },
            Mutation: {
                createUser: async (_, { name, password, email }) => {
                    await prismadb_1.default.user.create({
                        data: {
                            name: "sahil",
                            email: "sahil01.com",
                            password: "khan123"
                        }
                    });
                    return true;
                }
            }
        }
    });
    await gqlServer.start();
    app.get("/", (req, res) => {
        res.json({ message: "server is running" });
    });
    app.use("/graphql", (0, express4_1.expressMiddleware)(gqlServer));
    app.listen(5000, () => console.log("server running on port 5000"));
}
;
init();
//# sourceMappingURL=app.js.map