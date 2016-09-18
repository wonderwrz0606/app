<!DOCTYPE html>
<!--[if lt IE 7]>      <html lang="en" ng-app="coreApp" class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html lang="en" ng-app="coreApp" class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html lang="en" ng-app="coreApp" class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html lang="en" ng-app="coreApp" class="no-js" ng-cloak> <!--<![endif]-->
<head>
	<meta charset="utf-8">
  	<meta http-equiv="X-UA-Compatible" content="IE=edge">
  	<meta name="description" content="">
  	<meta name="viewport" content="width=device-width, initial-scale=1">
  
  	<title>Operr System</title>
	<!-- Add custom CSS here -->
	<link rel="stylesheet" href="css/bootstrap.css">
	<link rel="stylesheet" href="css/media.css">
<!-- 	<link rel="stylesheet" href="../admin/css/dtpicker/jquery.simple-dtpicker.css"/> -->
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.1/css/font-awesome.min.css">
	<link rel="stylesheet" href='https://fonts.googleapis.com/css?family=Open+Sans:400,300,300italic,400italic,700'>
	<link rel="stylesheet" href='https://fonts.googleapis.com/css?family=Roboto+Slab'>
	<link rel="stylesheet" href="css/style.css">
	<link rel="stylesheet" href="css/sb-admin.css">
</head>
<body>
  	<!--[if lt IE 7]>
      <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
  	<![endif]-->
  	
  	<div ng-view></div>
  
  	<script src="//ajax.googleapis.com/ajax/libs/angularjs/1.5.8/angular.min.js"></script>
  	<script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.5.8/angular-route.min.js"></script>
  	<script src="app.js"></script>
  	<script src="adminMgmtPage/adminMgmtPageController.js"></script>
  	<script src="adminLoginPage/adminLoginPageController.js"></script>
  	<script src="adminDashboardPage/adminDashboardPageController.js"></script>
  	<script src="components/header/headerController.js"></script>
  	<script src="components/footer/footerController.js"></script>
  	<script src="services/coreService.js"></script>
  	
<!--   	<script src="components/map/adminDashboardMapController.js"></script> -->
<!--   	<script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAi49lL84Iw110hJppU4AyXwb7OmGyFvOU&callback=initMap"></script> -->
<!-- 	<script type="text/javascript" src="js/infobubble.js"></script> -->
<!-- 	<script type="text/javascript" src="bower_components/angular-ui-event/dist/event.min.js"></script> -->
<!-- 	<script type="text/javascript" src="bower_components/angular-ui-map/ui-map.min.js"></script> -->
<!-- 	<script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyAi49lL84Iw110hJppU4AyXwb7OmGyFvOU&sensor=false&callback=initMap"></script> -->
</body>
</html>
