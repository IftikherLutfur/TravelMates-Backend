export const sslcommerzConfig = {
    store_id: process.env.STORE_ID as string,
    store_passwd: process.env.STORE_PASSWORD as string,
    is_live: process.env.SSLC_IS_LIVE === "true",
}