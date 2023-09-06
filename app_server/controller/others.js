module.exports.about = function(req, res) {
  res.render('generic-text', {
  title: 'About Loc8r',
  content: 'Loc8r was created to help people find places to sit down and get a bit of work done.\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed lorem ac nisi dignissim accumsan. Nullam sit amet interdum magna. Morbi quis faucibus nisi. Vestibulum mollis purus quis eros adipiscing tristique. Proin posuere semper tellus, id placerat augue dapibus ornare. Aenean leo metus, tempus in nisl eget, accumsan interdum dui. Pellentesque sollicitudin volutpat ullamcorper.\n\nSuspendisse tincidunt, lectus non suscipit pharetra, purus ipsum vehicula sapien, a volutpat mauris ligula vel dui. Proin varius interdum elit, eu porttitor quam consequat et. Quisque vitae felis sed ante fringilla fermentum in vitae sem. Quisque fermentum metus at neque sagittis imperdiet. Phasellus non laoreet massa, eu laoreet nibh. Pellentesque vel magna vulputate, porta augue vel, dapibus nisl. Phasellus aliquet nibh nec nunc posuere fringilla. Quisque sit amet dignissim erat. Nulla facilisi. Donec in sollicitudin ante. Cras rhoncus accumsan rutrum. Sed aliquet ligula dui, eget laoreet turpis tempor vitae.'
  });
  };
  

/* GET 'signin' page */
module.exports.signin = function(req, res){
    res.render('signin', { title: 'signin' });
    content: 'Loc8r is the application you’ll build throughout this book. It displays differently on different devices, showing a list of places and details about each place, and allows visitors to log in and leave reviews.'
  }
  /* GET 'register' page */
  module.exports.register = function(req, res){
    res.render('register', { title: 'register' });
    content: 'Loc8r is the application you’ll build throughout this book. It displays differently on different devices, showing a list of places and details about each place, and allows visitors to log in and leave reviews.'
  }