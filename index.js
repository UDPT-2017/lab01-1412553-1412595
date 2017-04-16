
var express = require ("express");
var exphbs  = require('express-handlebars');
var app = express();
app.use(express.static("public"));

app.engine('hbs', exphbs({}));
app.set('view engine', 'hbs');





app.get("/", function(req, res)
{
	res.render('index', {title: 'Chào bạn đến với website', message: 'Hello there'});
});

app.get('/about', function(req, res)
{
	res.render('about', {title: 'Thông tin nhóm', message: 'Thông tin nhóm'});
});

app.get('/albums', function(req, res)
{
	res.render('albums', {title: 'Các tập phim hoạt hình hot nhất', message: 'Cartoon'});
});

app.get('/blog01', function(req, res)
{
	res.render('blog01', {title: 'My Blog', message: 'Blog'});
});

app.get('/blog02', function(req, res)
{
	res.render('blog2', {title: 'My Blog', message: 'Blog'});
});

app.get('/blog03', function(req, res)
{
	res.render('blog03', {title: 'My Blog', message: 'Blog'});
});

app.get('/conan', function(req, res)
{
	var img = [
		'img/conan/img1.jpg',
		'img/conan/img2.jpg',
		'img/conan/img3.jpg',
		'img/conan/img4.jpg',
		'img/conan/img5.jpg',
		'img/conan/img6.jpg',
		'img/conan/img7.jpg',
		'img/conan/img8.jpg',
		'img/conan/img9.jpg',
		'img/conan/img10.jpg',
	];
	res.render('conan', {title: 'Bộ sưu tập ảnh hoạt hình', message: 'Img Conan'});
});

app.get('/doremon', function(req, res)
{
	res.render('doremon', {title: 'Bộ sưu tập ảnh hoạt hình', message: 'Img Doremon'});
});

app.get('/logincomple', function(req, res)
{
	res.render('logincomple', {title: 'Các tập phim hoạt hình hot nhất', message: 'Comple'});
});


app.get('/login', function(req, res)
{
	res.render('login', {title: 'Mời bạn đăng nhập', message: 'Login'});
});

app.get('/myblog', function(req, res)
{
	res.render('myblog', {title: 'My Blog', message: 'Blog'});
});

app.get('/naruto', function(req, res)
{
	res.render('naruto', {title: 'Bộ sưu tập ảnh hoạt hình', message: 'Img Naruto'});
});

app.get('/nguoinhen', function(req, res)
{
	res.render('nguoinhen', {title: 'Bộ sưu tập ảnh hoạt hình', message: 'Img Spider Man'});
});

app.get('/pokemon', function(req, res)
{
	res.render('pokemon', {title: 'Bộ sưu tập ảnh hoạt hình', message: 'Pokemon'});
});

app.get('/sign-up', function(req, res)
{
	res.render('sign-up', {title: 'Đăng kí tài khoản', message: 'Sign up'});
});

app.get('/tom', function(req, res)
{
	res.render('tom', {title: 'Bộ sưu tập ảnh hoạt hình', message: 'Tom & Jerry'});
});


app.listen(3000, function() {
	console.log ('OK');
});
