const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  return this.journeys.map((journey) => {
  return journey.startLocation;
})
};

Traveller.prototype.getJourneyEndLocations = function () {
  return this.journeys.map((journey) => {
  return journey.endLocation;
})
};

Traveller.prototype.getModesOfTransport = function () {
  return this.journeys.map((journey) => {
  return journey.transport;
})
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  return this.journeys.filter(journey => journey.transport === transport);
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  return this.journeys.filter(journey => journey.distance > minDistance);
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
    return this.journeys.reduce((total, journey) => total += journey.distance , 0)
};

Traveller.prototype.getUniqueModesOfTransport = function () {
  
};


module.exports = Traveller;
