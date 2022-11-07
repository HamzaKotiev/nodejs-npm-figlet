import figlet from 'figlet'


let texts = 'intocode'




figlet(texts, function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data)
});