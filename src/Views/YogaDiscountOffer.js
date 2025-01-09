import React from "react";

export function YogaDiscountOffer() {
  
    let discount = "20%";
    let discountMessage = `Get ${discount} off your next purchase by subscribing to my blog!`

    return (<div  className="alert alert-info alert-dismissible border-dark bg-dark-subtle text-info-subtle m-4" role="alert">
        <h5>{discountMessage}</h5>
        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>);
}

