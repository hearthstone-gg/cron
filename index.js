var CronJob = require('cron').CronJob;

new CronJob('*/5 * * * * *', function() {

	console.log('Cron Running');

}, null, true, 'America/New_York');