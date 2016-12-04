module.exports = function (req, res, next) {
  var url = req.url;
  var method = req.method;
  var start = +new Date();

  res.on('finish', function () {
    var duration = +new Date() - start;
    var message = method + ' to ' + url + ' took ' + duration + ' ms.';
    process.stdout.write(message);
  });
  next();
};
