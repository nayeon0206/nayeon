// falsy한 값, truthy한 값

// falsy한 값?
// if문의 조건문 안에서는
// if (0, "", null, undefined, NaN, false)까지 false라는 값으로 해석이 된다.
if (0) {
    // main logic
    console.log("hello")
}

if ("") {
    // main logic
    console.log("hello")
}

if (null) {
    // main logic
    console.log("hello")
}

if (undefined) {
    // main logic
    console.log("hello")
}

if (NaN) {
    // main logic
    console.log("hello")
}

if (false) {
    // main logic
    console.log("hello")
}
// if (true의 값만 읽었음.)
if (true) {
    console.log("hello")
}