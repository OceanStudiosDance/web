import * as Sentry from "@sentry/nuxt";
 
Sentry.init({
  dsn: "https://38d11e3c138cdda75b27134f60e903d6@o4509893846564864.ingest.us.sentry.io/4509893847547904",

  // We recommend adjusting this value in production, or using tracesSampler
  // for finer control
  tracesSampleRate: 1.0,

  // Enable logs to be sent to Sentry
  enableLogs: true,
  
  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,
});
