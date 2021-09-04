function zodiac(year) {
    let zodiac = ['monkey','rooster','dog','pig','rat','ox','tiger','rabbit','dragon','snake','horses','sheep']
    let date = new Date;
    year = date.getFullYear() < year?year - 543:year;
    return zodiac[year%12];
}
console.log(zodiac(2001));
console.log(zodiac(2547));
