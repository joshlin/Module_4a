$(function () {
	
	$.get('/trucks', function (trucks) {
		var truckList = [];
		trucks.forEach(function (truck) {
			truckList.push('<li><a href="/trucks/' + encodeURIComponent(truck.name) + '/">' + truck.name + '</a></li>')
		});
		$('.truck-list').append(truckList);
	});

	$.get('/food-types', function (foodTypes) {
		var foodTypeList = [];
		foodTypes.forEach(function (type) {
			foodTypeList.push('<li><a href="/food-types/' + encodeURIComponent(type) + '/">' + type + '</a></li>')
		});
		$('.food-type-list').append(foodTypeList);
	});	

});