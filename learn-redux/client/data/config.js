import Raven from 'raven-js';
// https://7b7d31559ed44ba58ffdf2884fdb4798@sentry.io/182072
const sentry_key = '7b7d31559ed44ba58ffdf2884fdb4798';
const sentry_app = '182072';
export const sentry_url = `https://${sentry_key}@app.getsentry.com/${sentry_app}`;

export function logException(ex, context) {
  Raven.captureException(ex, {
    extra: context
  });
  /*eslint no-console:0*/
  window && window.console && console.error && console.error(ex);
}
