import React, { useState, useEffect } from "react";

import { Container, Row, Col, Card } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyCard from "./MyCard";

import Axios from "axios";

const App = () => {
  const [details, setDetails] = useState({});
  const fetchDetails = async () => {
    const { data } = await Axios.get("https://randomuser.me/api/");
    //console.log("RESPONSE: ", data);

    const details = data.results[0];

    setDetails(details);
  };

  useEffect(() => {
    fetchDetails();
  }, []);

  return (
    <Container fluid className="p-4 bg-primary App">
      <Row>
        <Col md={4} className="offset-md-4 mt-4">
          <MyCard details={details} />
        </Col>
      </Row>
    </Container>
  );
}

export default App



// {
//   "results": [
//     {
//       "gender": "male",
//       "name": {
//         "title": "Mr",
//         "first": "Thomas",
//         "last": "Bjørnøy"
//       },
//       "location": {
//         "street": {
//           "number": 4028,
//           "name": "Lakkegata"
//         },
//         "city": "Tveit",
//         "state": "Oppland",
//         "country": "Norway",
//         "postcode": "4008",
//         "coordinates": {
//           "latitude": "56.4477",
//           "longitude": "-9.7151"
//         },
//         "timezone": {
//           "offset": "+4:30",
//           "description": "Kabul"
//         }
//       },
//       "email": "thomas.bjornoy@example.com",
//       "login": {
//         "uuid": "e1a67e89-e878-401f-a3b4-e7b34e93ea3a",
//         "username": "sadfrog915",
//         "password": "call",
//         "salt": "6GDHaf8i",
//         "md5": "eef491681aa1b9d4e0a5caccd018206a",
//         "sha1": "b2fb6ac23bd9769794415885d2edeeb0e2b15fe6",
//         "sha256": "70b5a21aed879ae5b51f9f274d2237b94b8943b5714c3ac081271eddb3db5ee9"
//       },
//       "dob": {
//         "date": "1968-11-07T18:10:07.043Z",
//         "age": 54
//       },
//       "registered": {
//         "date": "2015-03-16T23:22:54.542Z",
//         "age": 7
//       },
//       "phone": "38629626",
//       "cell": "43371963",
//       "id": {
//         "name": "FN",
//         "value": "07116847986"
//       },
//       "picture": {
//         "large": "https://randomuser.me/api/portraits/men/22.jpg",
//         "medium": "https://randomuser.me/api/portraits/med/men/22.jpg",
//         "thumbnail": "https://randomuser.me/api/portraits/thumb/men/22.jpg"
//       },
//       "nat": "NO"
//     }
//   ],
//   "info": {
//     "seed": "69f7ab3d59e4597f",
//     "results": 1,
//     "page": 1,
//     "version": "1.3"
//   }
// }