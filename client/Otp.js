
// const Otp = () => {
//   return (
//     <div className="w-[300px] h-[700px]  flex flex-col items-center justify-center">
//     <h3>Enter OTP</h3>
//     <p>We have sent a verification code to your mobile number</p>
//     <div className="flex">
//         <input type='text' maxLength="1" required="required"/>
//         <input type='text' maxLength="1" required="required"/>
//         <input type='text' maxLength="1" required="required"/>
//         <input type='text' maxLength="1" required="required"/>
//     </div>

   
    
//     </div>
//   ) 
// }

// export default Otp


const array=[
  {
    id: "0001",
    type: "donut",
    name: "Cake",
    ppu: 0.55,
    batters:
      {
       batter:
          [
            { id: "1001", type: "Regular" },
            { id: "1002", type: "Chocolate" },
            { id: "1003", type: "Blueberry" },
            { id: "1004", type: "Devil's Food" }
          ]
      }
  },
  {
    id: "0002",
    type: "donut",
    name: "Raised",
    ppu: 0.55,
    batters:
      {
       batter:
          [
            { id: "1001", type: "Regular" }
          ]
      }
  },
  {
    id: "0003",
    type: "donut",
    name: "Old Fashioned",
    ppu: 0.55,
    batters:
      {
       batter:
          [
            { id: "1001", type: "Regular" },
            { id: "1002", type: "Chocolate" }
          ]
      }
  }
]
const value = array.filter((item)=>item.id==="0001")
console.log(value)
