export const clientName = "Luis"; 
export const clientAge = 27;

export const showInformation = (name, age) => {
    return `${name} is ${age} years old`;
}

export const balance = (amount) => {
    if (amount > 0) {
        return `, balance ${amount} is positive`;
    }else {
        return `, balance ${amount} is negative`;
    }
}
