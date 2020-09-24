const loading = document.querySelectorAll("#loading path");

for(let i = 0; i < loading.length; i++) {
    console.log(`letter ${i} is ${loading[i].getTotalLength()}`);
}