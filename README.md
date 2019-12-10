# Explanation of `once`

```js

function chargeCreditCard() {};

function once() {};

const chargeCreditCardOnce = once(chargeCreditCard);

```

* On first call to the new function `chargeCreditCardOnce` it behaves exactly like the function originally passed to `once`

* Beyond the first call the new function is blocked from behaving like the function originally passed to once (`chargeCreditCard`)