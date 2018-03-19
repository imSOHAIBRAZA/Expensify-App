const sum =(a,b)=>{
    return a+b;
}


test('should add two values',()=>{
    const result=sum(3,5);
    expect(result).toBe(8);
})