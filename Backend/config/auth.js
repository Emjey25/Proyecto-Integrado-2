import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

let authInstance = null;

// Envolvemos la inicialización en una función para asegurar
// que la base de datos esté conectada primero.
export const initAuth = (mongoClient) => {
    authInstance = betterAuth({
        database: mongodbAdapter(mongoClient.db()),
        emailAndPassword: {
            enabled: true, // Habilita login/registro por email
        },
    });
    return authInstance;
};

export const getAuth = () => authInstance;