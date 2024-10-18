

    // const currentDate = new Date();
    // console.log(currentDate)
    // const footer=currentDate.toString();
    // console.log(footer.slice(0,11))


    const currentDate = new Date();

    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const day = String(currentDate.getDate()).padStart(2, '0');
    
    const footer=`${year}-${month}-${day}`;  // Output: YYYY-MM-DD

    module.exports={footer};
    