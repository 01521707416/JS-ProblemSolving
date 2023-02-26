/*
* If the number is divisible by 3, print 'foo'
* If the number is divisible by 5, print 'bar'
* If the number is divisible by 3 & 5, print 'foobar'
    from a particular range.
*/

for (let i = 0; i <= 50; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log('foobar')
    }
    else if (i % 3 == 0) {
        console.log('foo')
    }
    else if (i % 5 == 0) {
        console.log('bar')
    }
    else {
        console.log(i)
    }
}