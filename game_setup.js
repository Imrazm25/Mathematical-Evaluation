
	player1_name = localStorage.getItem("player1_name");
	player2_name = localStorage.getItem("player2_name");

	player1_score = 0;
	player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";

document.getElementById("player1_score").innerHTML = player1_score ;
document.getElementById("player2_score").innerHTML = player2_score ;

document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name ;
document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name ;

function send() {
	get_expression= document.getElementById("expression").value;
	console.log("Expression=" + get_expression);
	result=eval(get_expression);
	console.log("Result" + result);



    question_word = "<h4 id='word_display'> Q. "+get_expression+"</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-danger' onclick='check()'>Check</button>";
    row =  question_word + input_box + check_button ; 
    document.getElementById("output").innerHTML = row;
	document.getElementById("expression").value = "";
	document.getElementById("display_result").innerHTML = "";
}


question_turn = "player1";
answer_turn = "player2";


function check()
{
	answer = document.getElementById("input_check_box").value;
	
	if(answer == result)	
	{
		if(answer_turn == "player1")
		{
			player1_score = player1_score +1;
		    document.getElementById("player1_score").innerHTML = player1_score;
			if(player1_score==5)
			{
				document.getElementById("display_winner").innerHTML = player1_name + " won the game";
				document.getElementById("restart").style.display="inline"; 
				document.getElementById("output").style.display="none";
				document.getElementById("send").style.display="none";
			}
		}
		else 
		{
			player2_score = player2_score +1;
		    document.getElementById("player2_score").innerHTML = player2_score;
			if(player2_score==5)
			{
				document.getElementById("display_winner").innerHTML = player2_name + " won the game";
				document.getElementById("restart").style.display="inline"; 
				document.getElementById("output").style.display="none";
				document.getElementById("send").style.display="none";
			}
		}
	}
	else
	{
		if(answer_turn == "player1")
		{
			player1_score = player1_score - 1;
		    document.getElementById("player1_score").innerHTML = player1_score;
		}
		else 
		{
			player2_score = player2_score - 1;
		    document.getElementById("player2_score").innerHTML = player2_score;
		}
		document.getElementById("display_result").innerHTML="Correct Answer was : " + result;
	}
	if(question_turn == "player1")
	{
		question_turn = "player2";
		document.getElementById("player_question").innerHTML = "Question Turn - " + player2_name ;
	}
	else 
	{
		question_turn = "player1";
		document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name ;
	}

	if(answer_turn == "player1")
	{
		answer_turn = "player2";
		document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name ;
	}
	else 
	{
		answer_turn = "player1";
		document.getElementById("player_answer").innerHTML = "Answer Turn - " + player1_name ;
	}

    document.getElementById("output").innerHTML = "";
}

function restart(){
	window.location="index.html";
}

