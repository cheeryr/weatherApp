
const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const message1 = document.getElementById('message-1');
const message2 = document.getElementById('message-2');


weatherForm.addEventListener('submit',(event)=>{
	event.preventDefault();//prevent the browser to refresh automatically
	const location = search.value;
	const url = '/weather?address=' + location;

	message1.innerHTML = 'Loading...';
	message2.innerHTML = '';
	
	fetch(url).then((response)=>{
		response.json().then((data)=>{
			if(data.error){
				message1.innerHTML = data.error;
				console.log(data.error);
			}else{
				message1.innerHTML = data.location;
				message2.innerHTML = data.forecast;
				console.log(data.location);
				console.log(data.forecast);
			}
			
		});
	});	
});