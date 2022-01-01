const env = process.env.REACT_APP_ENVIRONMENT === 'Development';
let KaientaiStripeApiUrl = env ? process.env.REACT_APP_KAIENTAI_STRIPE_API_URL_DEV : process.env.REACT_APP_KAIENTAI_STRIPE_API_URL_PROD
export const BackendUrl = env ? process.env.REACT_APP_KAIENTAI_DASHBOARD_BACKEND_URL_DEV : process.env.REACT_APP_KAIENTAI_DASHBOARD_BACKEND_URL_PROD
export const WebsocketUrl = env ? process.env.REACT_APP_KAIENTAI_WEBSOCKET_URL_DEV : process.env.REACT_APP_KAIENTAI_WEBSOCKET_URL_PROD
export const CustomerPortalUrl = KaientaiStripeApiUrl + '/create-customer-portal-session/'

export const ApiUrl = env ? process.env.REACT_APP_API_URL_DEV : process.env.REACT_APP_API_URL_PROD
export const HostUrl = window.location.href;
export const HostUrlParams = new URLSearchParams(window.location.search);