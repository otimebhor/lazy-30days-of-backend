const BoO = (name) => {
    var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?\s]+/
    if(format.test(name)) {
        console.log('Please remove all spaces or special characters')
    }else if (name === 'Bolu' || name === 'Odun') {
        console.log(`Welcome back, ${name}`)
    } else{
        console.log(`Nice to meet you, ${name}`)
    }
}

BoO('Odun')
BoO('Bolu')
BoO('Michael Jackson')
BoO('Michael')