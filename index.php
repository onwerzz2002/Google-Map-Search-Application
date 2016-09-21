<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->
<html>
    <head>
        <meta charset="UTF-8">
        <title></title>
        <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBEX6yjQqDUmbXLai34ArTt9ypIyjjIHes&libraries=places"></script>
        <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.js"></script> 
        <link href="map.css" type="text/css" rel="stylesheet">
        
    </head>
    <body>
        <div id="result">Result</div>
        <div id="result1"></div>
        <div id="container">
            
            <p><input id="addr" value="" placeholder="Enter place" >
            <select id="selection1">
                <option disabled selected value> -- Place Type -- </option>
                <option value="restaurant">restaurant</option>
                <option value="store">store</option>
                <option value="hospital">hospital</option>
                <option value="gym">Gym</option>
                <option value="gas_station">Gas Station</option>              
            </select>
            <select id="selection2">
                <option disabled selected value> -- Search Range -- </option>
                <option>500</option>
                <option>1000</option>
                <option>1500</option>
            </select>
                <button id="query">Search</button></p>    
                      
        </div>
        <div id="mymap" style="width:800px;height:800px;" a></div>
        
        
        
       
    </body>
    
</html>
<script src="map.js" type="text/javascript" charset="utf-8"></script>


