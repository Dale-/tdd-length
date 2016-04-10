/**
 * Created by Dale on 4/10/16.
 */

const context = require.context('../src', true, /-test\.js$/);
context.keys().forEach(context);
