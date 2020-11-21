


 fetch('https://api.covid19api.com/summary')
 .then(response => response.json())
 .then(data => {
    var tbody = document.querySelector('#tbody');
   tbody.innerHTML = `
   <tr>
<td>${data.Global.NewConfirmed}</td>
<td>${data.Global.TotalConfirmed}</td>
<td>${data.Global.TotalDeaths}</td>
<td>${data.Global.TotalRecovered}</td>
   </tr>
   `

   var all_covid_data = document.querySelector('#all_covid_data')
    var countries = data.Countries ;


      for(var i =1;i<countries.length ; i++){

        all_covid_data.innerHTML += `   <tr>
        <td class='bg-primary text-light '>${countries[i].Country}</td>
        <td>${countries[i].NewConfirmed}</td>
        <td>${countries[i].NewDeaths}</td>
        <td>${countries[i].NewRecovered}</td>
        <td>${countries[i].TotalConfirmed }</td>
        <td>${countries[i].TotalRecovered}</td>
        <td>${countries[i].TotalDeaths}</td>
           </tr>`;


  }
 })
 .catch(err => console.log(err))


 // searching or filtering data from table
 var tableRow = document.getElementById('all_covid_data');
var inputField = document.getElementById('searchBox');

console.log(tableRow);

inputField.addEventListener('keyup', function () {
  var inputValue = this.value.toLowerCase();
  // console.log(inputValue)

tableRow.forEach((tableData)=>{
   // tableData.querySelector('td').textContent.toLowerCase().startsWith(inputValue) ? tableData.style.display = '' : tableData.style.display = 'none';
  
  console.log(tableData.children);
})

})







