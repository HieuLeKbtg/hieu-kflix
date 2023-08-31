export const configEnv = {
    FIREBASE_AUTH_EMULATOR_HOST:
        process.env.NEXT_PUBLIC_FIREBASE_AUTH_EMULATOR_HOST,
    API_ENDPOINT: process.env.NEXT_PUBLIC_API_ENDPOINT,
    FIREBASE_API_KEY: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    FIREBASE_APP_ID: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    FIREBASE_AUTH_DOMAIN: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    FIREBASE_MEASUREMENT_ID: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
    FIREBASE_MESSAGING_SENDER_ID:
        process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    FIREBASE_PROJECT_ID: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    FIREBASE_STORAGE_BUCKET: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    SECURITY_CSRF_SECRET_KEY: process.env.NEXT_PUBLIC_SECURITY_CSRF_SECRET_KEY,
    FIREBASE_REALTIME_DB_URL: process.env.NEXT_PUBLIC_FIREBASE_REALTIME_DB_URL,
    DOMAINS_CONTENT_SECURITY_POLICY:
        process.env.NEXT_PUBLIC_DOMAINS_CONTENT_SECURITY_POLICY
}
