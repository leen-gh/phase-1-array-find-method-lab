// code your solution here
const newArgy =[
    { year: "2015", result: "W"},
  { year: "2014", result: "N/A"},
  { year: "2013", result: "L"},
]
let winYear 
function superbowlWin(argy) {
    const h = argy.find((arg)=>{
        if(arg.result == "W")
            return arg.year
        })
        if (h)
            return h.year 
    
    
}