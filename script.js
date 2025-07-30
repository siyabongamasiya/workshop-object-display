console.log("hello world")
const myData = {
  Name : 'Terracotta Army',
  Country : 'china',
  Emperor : 'Qin Shi Huang',
  "Discovery-date" : '1974',
  Description : 'The Terracotta Army is a vast collection of life-sized terracotta Sculptures depicting the armies of Qin Shi Huang.'
}

// document.getElementById('root').innerHTML = "siphakathi"
// console.log(myData["Country"])
// console.log(myData["china"])
// myData.recordId = "12352763527"
// console.log(myData)
// document.getElementById('root').innerHTML = JSON.stringify(myData)


const title = document.getElementById('title')
const output = document.getElementById('text')

const outputChild = `<p style="font-size: 1.2rem;"> <span style="font-size: 1.5rem;">Name: </span> ${myData.Name}<p>
<p style="font-size: 1.2rem;"><span style="font-size: 1.5rem;">Country: </span> ${myData.Country}<p>
<p style="font-size: 1.2rem;"><span style="font-size: 1.5rem;">Emperor: </span> ${myData.Emperor}<p>
<p style="font-size: 1.2rem;"><span style="font-size: 1.5rem;">Discovery-Date: </span> ${myData["Discovery-date"]}<p>
<p style="font-size: 1.2rem;"><span style="font-size: 1.5rem;">Description: </span> ${myData.Description}<p>`

title.textContent = myData.Name
output.innerHTML = outputChild
