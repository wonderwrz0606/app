<?php
ob_start ();
session_start ();
define ( 'INCLUDE_PATH', '../../' );
define ( 'ADMIN_SCRIPT', '' );
require_once ("../../includes/server_config.php");
/* ----------------------------------Start center page include----------------------------- */
$query = "SELECT * FROM " . TBL_DRIVER_FILTER . " AS DF RIGHT JOIN " . TBL_DRIVER . " AS D ON DF.driver_id = D.id LEFT JOIN ".TBL_DUTY_STATUS." AS DS ON D.duty_status = DS.id WHERE ( DS.id = 1 OR DS.id = 2 ) AND D.base_approved='1' AND DF.lat != '0.0'";
$scope = $_GET['scope'];
$scope ? $query .=" AND D.$scope" : "";

$query .= " AND DF.updated_at > (NOW() - INTERVAL 30 MINUTE) "; //only show the drivers on map who is actived in 10 minutes
$result = mysql_query ( $query );
if (! $result) {
	die ( 'Invalid query: ' . mysql_error () );
}
$map_values = array ();
if (@mysql_num_rows ( $result ) > 0) {
	while ( $row = mysql_fetch_array ( $result ) ) {
		array_push ( $map_values, $row );
	}
}
//add insurance company order to map
if(count($_GET)>1){
	$lat=$_GET['lat'];
	$lng=$_GET['lng'];
	$temp = array(
			"first_name"=>"",
			"last_name"=>"",
			"profile_photo"=>"",
			"lat"=>$lat,
			"lng"=>$lng,
			"phone"=>"",
			"duty_status"=>1
	);
	array_push($map_values,$temp);
}

$i = 1;
$total_values = count ( $map_values );
$data = '[';
foreach ( $map_values as $value ) {
	if ($value ['profile_photo'])
		$driverphoto = trim ( '../upload/driver/'.$value ['profile_photo'] );
	else
		$driverphoto = '../image/driver-default.jpg';
	if ($value ['duty_status'] == 2)
		$map_type = 'onjob';
	elseif ($value ['duty_status'] == 1)
		$map_type = 'onduty';
	elseif ($value ['duty_status'] == 0)
		$map_type = 'offduty';
	
// 	$name = trim ( addslashes ( $value ['first_name'] ) ) . " " . trim ( addslashes ( $value ['last_name'] ) );
	$name = trim ( addslashes ( $value ['first_name'] ));
	$status=$value ['duty_status'];
	if($status!= 2 && $status!= 1 && $status!= 0){
		$status = 'order';
	}
	$data .= '{ "map_name": "' . $name . '","map_driverphoto":"' . $driverphoto . '","latLon": "' . trim ( $value ['lat'] ) . ',' . trim ( $value ['lng'] ) . '","map_mobile":"' . addslashes ( $value ['phone'] ) . '","duty_status":"' . addslashes ( $status ) . '","map_type":"' . $map_type . '","fleet_num":"'.addslashes ( $value ['fleet_num'] ).'"}';
	if ($total_values != $i)
		$data .= ',';
	$i ++;
}
$data .= "]";
echo $data;
return $data;
?>