function reverse(x) {
    if (typeof x === 'number') {
        return x + 101;
    }
    else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}
console.log(reverse(99));
console.log(reverse('hello'));
