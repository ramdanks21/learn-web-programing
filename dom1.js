// DOM Manipulation





// getElementByid()


const title = document.getElementById('main-heading')

console.log(title)


// GetElementByclassName

// const listItem = document.getElementsByClassName('list-name')

// console.log(listItem)



// getElementsByTagName(localName: DOMString)

// const listItem = document.getElementsByTagName('li')

// console.log(listItem)


const hai = document.querySelector('ul')
const li = document.createElement('li')
hai.append(li)
li.innerText = 'Get Buys'


// QuerySelector()
// const container = document.querySelector('div')
// console.log(container)

// QuerySelectorALl()

const container = document.querySelectorAll('div')
console.log(container)
