
function myFunction(){

if (one == 'r' && two == 's' || one == 'p' && two == 'r' || one == 's' && two == 'p'){
	document.getElementById("viewcounter").innerHTML = "Player One Wins!";
}



 else if (one == 'r' && two == 'p' || one == 'p' && two == 's' || one == 's' && two == 'r'){

document.getElementById("viewcounter").innerHTML = "Player Two Wins";


}

else if (one == null || two == null){
	document.getElementById("viewcounter").innerHTML = "Start";
}

else{

	document.getElementById("viewcounter").innerHTML = "Tie";

}



}