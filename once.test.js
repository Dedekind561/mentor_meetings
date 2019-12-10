const once = require('./once')

describe('once()',() => {
  test('returns a new function',() => {

    // a function to pass to once()
    function chargeCreditCard() {

    }

    // check the return value of once()
    const onceReturnValue = once(chargeCreditCard);
  
   expect(typeof onceReturnValue).toBe('function')
  })
})