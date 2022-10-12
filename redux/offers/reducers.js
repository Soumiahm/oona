import { combineReducers } from "redux";
import types from "./types";

/* Offer State Shape
{
  id: String,
  rate: double,
  weight: double, 
  pickupAdress: 
      {
        streetAddress: String,
        postalCode: String,
        city: String,
        country: String,
       }, 
  dropoffAdress:  {
        streetAddress: String,
        postalCode: String,
        city: String,
        country: String,
       }, 
  pickupDate: Date, 
  dropOffDate: Date, 
  notes:"",
  status: Enum,
}
-----------------------------------------------
shipper state shape:
{
  id: "",
  firstName: "",
  lasttName: "",
  address: "",
  ...
}
-----------------------------------------------

overall state shape:
{
  users: [
    {
      name: "", 
      lastName: "", 
      offers: [
        { id: String, rate: double, weight: double}, 
        { id: String, rate: double, weight: double},
        { id: String, rate: double, weight: double},
      ]
    },
    {
      name: "", 
      lastName: "", 
      offers: [
        { id: String, rate: double, weight: double}, 
        { id: String, rate: double, weight: double},
        { id: String, rate: double, weight: double},
        { id: String, rate: double, weight: double},
      ]
    }, 
  ],  
}

 Overall State Shape:
 {
   offers: [{}, {}, ....],
   shippers: [{}, {}, ...],
  //  admin: {}??,
   filters: {status: Filters.All}
  }
  Actions:
  //app state
  - add an offer => {type: "offerAdded", payload: Offer/or an object of info}
  - copy an offer => {type: "copyOffer", } //open that offer the user pressed on, 
                                            // and get the form with prepopulated data
                                            // then dipatch addOffer action
  - update offer => {type: }
  - delete an offer
  - display offers
  // ui state
  - choose a different filter status
  - //the carriers should be able to toggle the complete status of the offer => carriers from flutter not shippers
  
 */
const rateReducer = (state=null, action) => {
  switch (action.type){
    case "types.ADD_PRICE": return action.payload; 
    case "types.CHANGE_PRICE": return action.payload;
    default: return state; 
      
  }
}
const initialState = [{
  streetAddress: "",
  postalCode:"",
  city:"",
  country:"",


  id: "",
  rate: "",
  weight:"", 
  pickupAdress: "", 
  dropoffAdress: "", 
  pickupDate: "", 
  dropOffDate: "", 
  notes:"",
  status:"",
 

  /*

class Address {
  final String streetNumber;
  final String streetName;
  final String city;
  final String province;
  final String postalCode;
  final String country;

  Address(
      {this.streetNumber,
      this.streetName,
      this.city,
      this.province,
      this.postalCode,
      this.country});
}

enum TrailerType {
  DryVan,
  Reefer,
  FlatbedOrStepdeck,
  PowerOnly,
}
enum Status {
  Open,
  Pending,
  Completed,
  Expired,
  Cancelled,
}

class Offer {
  final String id;
  final Address pickupAdress;
  final Address dropoffAdress;
  final DateTime pickupDate;
  final DateTime dropOffDate;
  int rate;
  final double distance;//---------no
  final double weight;
  final TrailerType trailerType;//-no
  final String requirements;
  // final String shipperId;
  final String notes;
  Status status;
  bool requested;//--------------no

  {id: "",
  rate: "",
  weight:"", 
  pickupAdress: "", 
  dropoffAdress: "", 
  pickupDate: "", 
  dropOffDate: "", 
  notes:"",
  status:"",
 }

  Offer({
    @required this.id,
    // @required this.shipperId,
    @required this.pickupAdress,
    @required this.dropoffAdress,
    @required this.distance,
    @required this.weight,
    @required this.dropOffDate,
    @required this.pickupDate,
    this.rate,
    @required this.trailerType,
    @required this.requirements,
    @required this.notes,
    this.requested = false,
    this.status = Status.Open,
  });
}

  
  */
}];

const offersReducer = (state = {}, action) => {
  switch (action.type) {
    case types.ADD_OFFER:
      return { ...state, offers: [...offers, action.payload] };
    default:
      return state;
  }
};
export default combineReducers({ offersReducer });
