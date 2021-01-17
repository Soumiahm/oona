// const Address =  {
    
//     streetNumber:"",
//     streetName: "",
//     city : "",
//     province: "",
//     postalCode,
//     country
//   }
  
//   enum TrailerType {
//     DryVan,
//     Reefer,
//     FlatbedOrStepdeck,
//     PowerOnly,
//   }
//   enum Status {
//     Open,
//     Pending,
//     Completed,
//     Expired,
//     Cancelled,
//   }
  
//   class Offer {
//     final String id;
//     final Address pickupAdress;
//     final Address dropoffAdress;
//     final DateTime pickupDate;
//     final DateTime dropOffDate;
//     int rate;
//     final double distance;
//     final double weight;
//     final TrailerType trailerType;
//     final String requirements;
//     // final String shipperId;
//     final String notes;
//     Status status;
//     bool requested;
  
//     Offer({
//       @required this.id,
//       // @required this.shipperId,
//       @required this.pickupAdress,
//       @required this.dropoffAdress,
//       @required this.distance,
//       @required this.weight,
//       @required this.dropOffDate,
//       @required this.pickupDate,
//       this.rate,
//       @required this.trailerType,
//       @required this.requirements,
//       @required this.notes,
//       this.requested = false,
//       this.status = Status.Open,
//     });