function fn() {    
  var env = karate.env; // get system property 'karate.env'
  karate.log('karate.env system property was:', env);
  if (!env) {
    env = 'dev';
  }
  var config = {
    env: env,
	myVarName: 'someValue'
  }
  if (env == 'dev') {
    // customize
    // e.g. config.foo = 'bar';
  } else if (env == 'e2e') {
    // customize
  }

  // config.helpers.wait = function (delay) {
  //                 java.lang.Thread.sleep(delay);
  //             }
  // config.helpers.date = {};
  // config.helpers.date.now = function () {
  //     var SimpleDateFormat = Java.type('java.text.SimpleDateFormat');
  //     var sdf = new SimpleDateFormat('yyyy-MM-dd\'T\'HH:mm:ss');
  //     var date = new java.util.Date();
  //     return sdf.format(date);
  // }
//   config.helpers.getDate = function(format,days){
//                   var dt = new Date();
//                   dt.setDate(dt.getDate() + parseInt(days));
//                   var time = dt.getTime();
//                   var SimpleDateFormat = Java.type('java.text.SimpleDateFormat');
//                   var sdf = new SimpleDateFormat(format);
//                   return sdf.format(time);
// }
  return config;
}

