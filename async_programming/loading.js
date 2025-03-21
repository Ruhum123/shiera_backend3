let dots = '';
let count = 0;

function animateLoading() {
    dots += '.';
    if (dots.length > 3) {
        dots = '.';
    }
    console.log('Loading' + dots);
}

const intervalId = setInterval(animateLoading, 500); // Update every 500ms

setTimeout(() => {
    clearInterval(intervalId);
    console.log('(Done after 5 seconds)');
}, 5000); // Stop after 5 seconds