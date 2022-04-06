function incrementString(str) {
    console.log(this)
    console.log(str)
}

const arrow = () => {
console.log(this)
}

const person = {
name: 'dima',
age: '23',
address : arrow,
    hey: incrementString,
    logInfo: function (str) {
    console.log(str)
    console.log(this.dd)
    }

}
const piska = {
    dd: 'd'
}

// person.logInfo.bind(piska, 'dima')()
// person.logInfo.call(piska, 'dima')
person.logInfo.apply(piska, ['dima'])

const array = [1,2,3,4,5]

// function multy(arr,n) {
//     return arr.map(item => item * n)
// }
//
// console.log(multy(array,2))

const obj = {
    name:'dima',
    number:'dima',
    nest: {
        dimik:{
            name:'dima',
            add: 'her'
        },
        vadik:{
            name:'dima'
        }
    },
    add:'dima'
}


const loop = () => {
  for (let i = array.length; i >= 0; i-- ) {
      // console.log(array[i])
  }

  const {add, name, ...rest } = obj

    console.log(rest)

  const newObj = {...obj, nest: {...obj.nest, dimik: {...obj.nest.dimik, name: 'aljoosa'}}}

  console.log(newObj)

  // for (let key in obj) {
  //       console.log(`${key} - ${obj[key]}`)
  // }

  Object.values(obj).forEach(item => console.log(`${item}`))

    const promise1 = 'get some'
    const promise2 = 'get some'
    const promise3 = 'get some'

Promise.all([promise1,promise2,promise3]).then(values => {
    console.log(values)
})

    for (let item of array) {
        console.log(item)
    }

    function useCounter(n = 0) {
        const [count, setCount] = useState()

        return []
    }
}

loop()
