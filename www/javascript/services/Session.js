//Session (made for Login)

expats.service('Session', function () {
  this.create = function (sessionId, userId, userRole, country, city, presentation, latitude, longitude, edu_lat, edu_long, cult_lat, cult_long) {
    this.id = sessionId;
    this.userId = userId;
    this.userRole = userRole;
    this.country = country;
    this.city = city;
    this.presentation = presentation;
    this.latitude = latitude;
    this.longitude = longitude;
    this.edu_lat = edu_lat;
    this.edu_long = edu_long;
    this.cult_lat = cult_lat;
    this.cult_long = cult_long;
  };
  this.destroy = function () {
    this.id = null;
    this.userId = null;
    this.userRole = null;
    this.country = null;
    this.city = null;
    this.presentation = null;
    this.latitude = null;
    this.longitude = null;
    this.edu_lat = null;
    this.edu_long = null;
    this.cult_lat = null;
    this.cult_long = null;
  };
  return this;
})