import React from 'react'
import Mycard from './Mycard.js'

export default function Image() {
  const people = [
    {
      id: 1,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMmxEOrQGAhAm-OlAuat0AkVDX_2rLT5C-AMmtu90GkQ&s",
      name: "Alexa",
      title: "Project Manager",
      exp: "1yr",
    },
    {
      id: 2,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt3u6WvpH4oeJVAKCd4oNeEguPWXXPCPNmuw&usqp=CAU",
      name: "Amelia.",
      title: "Executive",
      exp: "2yr",
    },
    {
      id: 3,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCnQBdByN3vsy6XpuYIRsLEg2buPeV22hBpQ&usqp=CAU",
      name: "Sophia",
      title: "Chief executive officer",
      exp: "4yr",
    },
    {
      id: 4,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9_FkrLAjZzVnk7F67cdF8CF9KIkSBZ8O2iz9IR8MXpX2o9n0UaXC2JQIM0zA9B2uhSEE&usqp=CAU",
      name:"Alia",
      title: "President",
      exp: "7yr",
    },
    {
      id: 5,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR05XfhTarARMfv-0noCae-jiS7kQlwP5eV6A&usqp=CAU",
      name: "Ava",
      title: "Executive assistant",
      exp: "3yr",
    },
    {
      id: 6,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRDO-gxBI2spoeAhjYcS7GZgMEV_cJ7XSnyQ&usqp=CAU",
      name: "Olivia",
      title: "Marketing manager",
      exp: "2yr",
    },
    {
      id: 7,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTymP7BcyIu1rr2Xy7yWG5-EL9cTvjRXKaneg&usqp=CAU",
      name: "Mia",
      title: "Finance manager",
      exp: "5yr",
    },
    {
      id: 8,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjAocgx75EsHf7PNCZrRrHRCvisADKQwiD52jdfMQax6rdcpTLRrUtzBWWZvgZuhSLLYA&usqp=CAU",
      name: "Elena",
      title: "manager",
      exp: "2yr",
    },
    {
      id: 9,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcxzX7h5O9wBCIvlIxe8As-MnSifI4pGi4Q13QeNdgfDptlitUBMp50sLCH0pXnnmhSw8&usqp=CAU",
      name: "Nova",
      title: "manager",
      exp: "3yr",
    },
    {
      id: 10,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSzky3yN8kmm7lE3pPJOrAx0Xt0xBjzrVJRa1NJWEPm8A8mvlzUFn3Xb4c2gs7xz6onOY&usqp=CAU",
      name: "Anna",
      title: "Business analyst",
      exp: "5yr",
    },

  ]

  return (
    <>
    <Mycard people={people}/>  
    </>

  );
}
